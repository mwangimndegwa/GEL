// public/chat-widget.js
(function () {
  // ---- config ----
  const CSS_PATH = "/chat-widget.css";
  const FUSE_CDN = "https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/dist/fuse.min.js";

  // show sources under messages? (false hides the "Sources:" line)
  const SHOW_SOURCES = false;

  // user-facing messages / thresholds
  const DEFAULT_NOT_FOUND_MESSAGE = "I’m sorry — I couldn’t find an exact answer on the website. I can point you to related pages or you can contact the team via the Contact page for immediate help.";
  const SITE_CONFIDENCE_THRESHOLD = 0.55; // lower is stricter (Fuse score)
  const FAQ_WORD_OVERLAP_MIN = 0.65;      // require ~65% overlap for faq key match
  const FAQ_FUSE_SCORE_MAX = 0.30;        // faqFuse must be better than this to accept

  // rotating greetings + WIP notice
  const GREETING_VARIANTS = [
    "Welcome! Ask me about our programs, donations, partnerships, or volunteering opportunities.",
    "Hi there! I can help with program details, how to donate, or ways to get involved.",
    "Hello! Curious about our impact or how to partner with us? Ask me anything.",
    "Good to see you! I can guide you through our programs, donation options, and volunteering."
  ];
  const WIP_NOTICE = "Note: this assistant is a work in progress & some answers may be partial. For urgent assistance, please contact us directly.";
  const GREETING_SHOW_ON_OPEN_ONLY = true;

  // fallback FAQ if /faq.json is missing or malformed
  const DEFAULT_FAQ = [
    { "q": "what is your mission", "a": "Global Educated Leaders cultivates a global community of leaders who leverage data, technology, and collaborative practice to drive sustainable development, improve food security, and foster equitable economic opportunity." },
    { "q": "how can i donate", "a": "You can make a secure donation via the Donate button on our website. For institutional gifts or receipts, please contact the development team through the Contact page." },
    { "q": "how can i get involved", "a": "Apply to our leadership programs, volunteer as a mentor, partner on community projects, or contribute financially. Visit the 'Get Involved' page for current opportunities and instructions." }
  ];

  // ---- utilities ----
  function randomGreeting() {
    return GREETING_VARIANTS[Math.floor(Math.random() * GREETING_VARIANTS.length)];
  }
  function buildGreetingMessage() {
    return `${randomGreeting()}\n\n${WIP_NOTICE}`;
  }

  // inject CSS
  try {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CSS_PATH;
    document.head.appendChild(link);
  } catch (e) {
    console.warn("Could not load chat CSS:", e);
  }

  // load Fuse.js
  function loadFuse() {
    return new Promise((resolve, reject) => {
      if (window.Fuse) return resolve(window.Fuse);
      const s = document.createElement("script");
      s.src = FUSE_CDN;
      s.onload = () => {
        if (window.Fuse) resolve(window.Fuse);
        else reject(new Error("Fuse loaded but window.Fuse missing"));
      };
      s.onerror = (err) => reject(err);
      document.head.appendChild(s);
    });
  }

  // ---- build UI ----
  const container = document.createElement("div");
  container.className = "gel-chatbox-launch";
  container.innerHTML = `
    <div class="gel-chat-panel" id="gelChatPanel" aria-hidden="true">
      <div class="gel-chat-header">
        <div style="display:flex;align-items:center;gap:12px;">
          <div class="gel-chat-title">Global Educated Leaders — Assistant</div>
          <div style="background:#FFD966;color:#42210B;padding:4px 8px;border-radius:8px;font-size:12px;font-weight:600;margin-left:8px;">Beta</div>
        </div>
        <button id="gelCloseBtn" aria-label="Close" style="background:transparent;border:none;color:white;font-weight:700;cursor:pointer">✕</button>
      </div>
      <div class="gel-chat-messages" id="gelMessages" role="log" aria-live="polite"></div>
      <div class="gel-chat-input">
        <textarea id="gelInput" placeholder="Ask about the organization's programs, mission, or events..." ></textarea>
        <button id="gelSend" class="gel-chat-send">Send</button>
      </div>
    </div>
    <button class="gel-chat-launch-btn" id="gelLauncherBtn" aria-expanded="false" aria-controls="gelChatPanel">
      💬 Chat with us
    </button>
  `;
  document.body.appendChild(container);

  // element refs
  const panel = document.getElementById("gelChatPanel");
  const launcher = document.getElementById("gelLauncherBtn");
  const closeBtn = document.getElementById("gelCloseBtn");
  const sendBtn = document.getElementById("gelSend");
  const input = document.getElementById("gelInput");
  const messages = document.getElementById("gelMessages");

  // message helpers
  function escapeHtml(str) {
    if (typeof str !== "string") return "";
    return str.replace(/[&<>"'`=\/]/g, s => ({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;" }[s]));
  }

  function addMessage(text, who = "bot", sources = []) {
    const d = document.createElement("div");
    d.className = "gel-msg " + (who === "user" ? "user" : "bot");
    if (/<a\s/i.test(text)) {
      d.innerHTML = text;
    } else {
      d.innerText = text;
    }
    messages.appendChild(d);

    if (SHOW_SOURCES && Array.isArray(sources) && sources.length) {
      const sdiv = document.createElement("div");
      sdiv.className = "gel-sources";
      sdiv.innerHTML = "Sources: " + sources.map(s => {
        const url = (typeof s === "string") ? s : (s.url || "");
        return `<a class='gel-source-link' href='${escapeHtml(url)}' target='_blank' rel='noopener noreferrer'>${escapeHtml(url)}</a>`;
      }).join(", ");
      messages.appendChild(sdiv);
    }
    messages.scrollTop = messages.scrollHeight;
  }

  function removeLastBotPlaceholder() {
    const lastBot = Array.from(messages.querySelectorAll(".gel-msg.bot")).filter(el => /searching|thinking|processing|loading/i.test(el.innerText));
    if (lastBot.length) lastBot[lastBot.length - 1].remove();
  }

  // ---- search state ----
  let faq = [];
  let knowledge = [];
  let fuse = null;
  let faqFuse = null;

  // load faq robustly
  async function loadFaq() {
    const candidates = ['/faq.json', '/public/faq.json'];
    for (const path of candidates) {
      try {
        const res = await fetch(path, { cache: 'no-store' });
        if (!res.ok) continue;
        const txt = await res.text();
        try {
          const parsed = JSON.parse(txt);
          if (Array.isArray(parsed) && parsed.length) return parsed;
          if (parsed && Array.isArray(parsed.docs) && parsed.docs.length) return parsed.docs;
        } catch (e) {
          console.warn("faq parse error for", path, e && e.message);
          continue;
        }
      } catch (e) {
        continue;
      }
    }
    return DEFAULT_FAQ.slice();
  }

  // load knowledge
  async function loadKnowledge() {
    try {
      const res = await fetch('/knowledge.json', { cache: 'no-store' });
      if (!res.ok) {
        const res2 = await fetch('/public/knowledge.json', { cache: 'no-store' }).catch(() => null);
        if (!res2 || !res2.ok) return [];
        const parsed2 = await res2.json().catch(() => null);
        return (parsed2 && parsed2.docs) ? parsed2.docs : [];
      }
      const parsed = await res.json().catch(() => null);
      return (parsed && parsed.docs) ? parsed.docs : (Array.isArray(parsed) ? parsed : []);
    } catch (e) {
      return [];
    }
  }

  // extract sentences (defensive + fallback)
  function extractBestSentences(chunkText, query, maxSentences = 3) {
    if (!chunkText) return [];

    const raw = chunkText
      .replace(/\r\n/g, '\n')
      .split(/\n+/)
      .map(p => p.trim())
      .filter(Boolean)
      .join("\n\n")
      .split(/(?<=[.?!])\s+/)
      .map(s => s.trim())
      .filter(Boolean);

    const qterms = (query || "").toLowerCase().split(/\W+/).filter(Boolean);
    const seen = new Set();
    const candidates = [];

    function isJunk(s) {
      if (!s) return true;
      const sl = s.trim();
      if (sl.length < 35) return true;
      if (/^global educated leaders$/i.test(sl)) return true;
      if (/^[A-Z0-9\W]{2,40}$/.test(sl) && sl.split(/\s+/).length <= 4) return true;
      if (/^\W+$/.test(sl)) return true;
      return false;
    }

    function scoreSentence(s) {
      const sLow = s.toLowerCase();
      let sc = 0;
      for (const t of qterms) if (t && sLow.includes(t)) sc += 4;
      sc += Math.min(Math.max(s.length / 140, 0), 2);
      return sc;
    }

    for (const s of raw) {
      const normalized = s.replace(/\s+/g, ' ').trim();
      const key = normalized.toLowerCase();
      if (!key || seen.has(key)) continue;
      seen.add(key);
      if (isJunk(normalized)) continue;
      candidates.push({ s: normalized, sc: scoreSentence(normalized) });
    }

    candidates.sort((a, b) => b.sc - a.sc);
    const top = candidates.slice(0, maxSentences).map(x => x.s);

    if (!top.length) {
      const paragraphs = chunkText.split(/\n{1,}/).map(p => p.trim()).filter(Boolean);
      for (const p of paragraphs) {
        if (p.length > 80 && !/^global educated leaders$/i.test(p)) {
          return [p.replace(/\s+/g, ' ').trim().slice(0, 900)];
        }
      }
      const cleaned = chunkText.replace(/\s+/g, ' ').trim().slice(0, 300);
      if (cleaned.length) return [cleaned];
      return [];
    }
    return top;
  }

  function faqWordOverlapScore(q, faqKey) {
    const qTerms = (q || "").toLowerCase().split(/\W+/).filter(Boolean);
    const kTerms = (faqKey || "").toLowerCase().split(/\W+/).filter(Boolean);
    if (!qTerms.length || !kTerms.length) return 0;
    let matches = 0;
    for (const t of qTerms) if (kTerms.includes(t)) matches++;
    return matches / Math.max(qTerms.length, kTerms.length);
  }

  // initialize search (load data + create Fuse instances)
  async function initSearch() {
    try {
      await loadFuse().catch(() => null);
      faq = await loadFaq();
      knowledge = await loadKnowledge();

      if (window.Fuse && Array.isArray(knowledge) && knowledge.length) {
        try {
          fuse = new window.Fuse(knowledge, {
            keys: ["content", "url"],
            includeScore: true,
            threshold: 0.55,
            ignoreLocation: true,
            minMatchCharLength: 2
          });
        } catch (e) {
          fuse = null;
          console.warn("Failed to create Fuse for knowledge:", e);
        }
      } else {
        fuse = null;
      }

      if (window.Fuse && Array.isArray(faq) && faq.length) {
        try {
          faqFuse = new window.Fuse(faq, {
            keys: ["q", "a"],
            includeScore: true,
            threshold: 0.45,
            ignoreLocation: true,
            minMatchCharLength: 2
          });
        } catch (e) {
          faqFuse = null;
        }
      } else {
        faqFuse = null;
      }
    } catch (err) {
      console.error("initSearch error:", err);
    }
  }

  // main answer logic: site-first, strict faq fallback
  async function answerQuery(qtext) {
    const q = (qtext || "").trim();
    if (!q) return { answered: false, message: "Please enter a question." };

    // 1) site-first search
    try {
      if (fuse) {
        const results = fuse.search(q, { limit: 7 }) || [];
        if (results.length) {
          const top = results[0];
          const topScore = (typeof top.score === "number") ? top.score : (top && top.score) || 1;
          if (topScore < SITE_CONFIDENCE_THRESHOLD) {
            const topN = results.slice(0, 3).map(r => r.item);
            let pieces = [];
            for (const d of topN) {
              const best = extractBestSentences(d.content || d, q, 2);
              if (best && best.length) pieces.push(best.join(" "));
            }
            if (!pieces.length && topN.length) {
              for (const d of topN) {
                const excerpt = (d.content || "").replace(/\s+/g, " ").trim().slice(0, 600);
                if (excerpt.length > 40) pieces.push(excerpt);
              }
            }
            if (pieces.length) {
              const final = "Here is information from the website:\n\n" + pieces.join("\n\n") + "\n\nIf you want more detail, I can show the full page.";
              const sources = topN.map(d => ({ url: d.url }));
              return { answered: true, message: final, sources };
            }
          }
        }
      }
    } catch (e) {
      console.warn("site search error:", e);
    }

    // 2) strict FAQ matching (exact or word-overlap)
    try {
      if (Array.isArray(faq) && faq.length) {
        const ql = q.toLowerCase();
        for (const f of faq) {
          if (!f || !f.q) continue;
          const key = (f.q || "").trim().toLowerCase();
          if (!key) continue;
          if (key === ql) return { answered: true, message: f.a, sources: [{ url: "/faq.json" }] };
        }
        for (const f of faq) {
          if (!f || !f.q) continue;
          const overlap = faqWordOverlapScore(ql, f.q);
          if (overlap >= FAQ_WORD_OVERLAP_MIN) return { answered: true, message: f.a, sources: [{ url: "/faq.json" }] };
        }
        if (faqFuse) {
          const fqRes = faqFuse.search(q, { limit: 3 }) || [];
          if (fqRes.length && typeof fqRes[0].score === "number" && fqRes[0].score < FAQ_FUSE_SCORE_MAX) {
            return { answered: true, message: fqRes[0].item.a, sources: [{ url: "/faq.json" }] };
          }
        }
      }
    } catch (e) {
      console.warn("faq matching error:", e);
    }

    // 3) fallback: show helpful site snippets if possible
    try {
      if (fuse) {
        const results = fuse.search(q, { limit: 5 }) || [];
        if (results.length) {
          const topDocs = results.slice(0, 3).map(r => r.item);
          let pieces = [];
          for (const d of topDocs) {
            const best = extractBestSentences(d.content || d, q, 2);
            if (best && best.length) pieces.push(best.join(" "));
          }
          if (!pieces.length) {
            for (const d of topDocs) {
              const excerpt = (d.content || "").replace(/\s+/g, " ").trim().slice(0, 600);
              if (excerpt.length > 40) pieces.push(excerpt);
            }
          }
          if (pieces.length) {
            const final = "I couldn't find an exact answer, but these sections from the site may help:\n\n" + pieces.join("\n\n");
            const sources = topDocs.map(d => ({ url: d.url }));
            return { answered: true, message: final, sources };
          }
        }
      }
    } catch (e) {
      // ignore
    }

    // 4) last resort
    return { answered: false, message: DEFAULT_NOT_FOUND_MESSAGE };
  }

  // ---- events / send flow ----
  let greeted = false;

  launcher.addEventListener("click", () => {
    panel.style.display = "flex";
    panel.setAttribute("aria-hidden", "false");
    launcher.style.display = "none";
    input.focus();
    if (!greeted || !GREETING_SHOW_ON_OPEN_ONLY) {
      addMessage(buildGreetingMessage(), "bot");
      greeted = true;
    }
  });

  closeBtn.addEventListener("click", () => {
    panel.style.display = "none";
    panel.setAttribute("aria-hidden", "true");
    launcher.style.display = "flex";
  });

  async function send() {
    const text = input.value.trim();
    if (!text) return;
    addMessage(text, "user");
    input.value = "";
    addMessage("Searching…", "bot");
    try {
      const resApi = await answerQuery(text);
      removeLastBotPlaceholder();
      if (!resApi) {
        addMessage("An unexpected error occurred. Please try again later.", "bot");
        return;
      }
      if (!resApi.answered) {
        addMessage(resApi.message || DEFAULT_NOT_FOUND_MESSAGE, "bot");
        return;
      }
      addMessage(resApi.message, "bot", resApi.sources || []);
    } catch (err) {
      removeLastBotPlaceholder();
      console.error("send error:", err);
      addMessage("An error occurred while processing your request. Try again later.", "bot");
    }
  }

  sendBtn.addEventListener("click", send);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  });

  // initialize
  (async function () {
    await initSearch();
  })();

  // expose minimal debugging info (safe)
  window.__gel_chat_widget = window.__gel_chat_widget || {};
  window.__gel_chat_widget.getState = () => ({ faqCount: faq.length, docsCount: knowledge.length, fuseAvailable: !!fuse });

})();
