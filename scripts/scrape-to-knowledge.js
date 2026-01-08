import fs from "fs";
import fetch from "node-fetch";

const PAGES = [
  "https://www.globaleducatedleaders.org/",
  "https://www.globaleducatedleaders.org/our-work/",
  "https://www.globaleducatedleaders.org/about-us/",
  "https://www.globaleducatedleaders.org/get-involved/"
];

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/<\/?[^>]+(>|$)/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// split into chunks by sentences, ~600-1200 characters
function chunkText(text, approxSize = 900) {
  const sentences = text.match(/[^\.\!?]+[\.\!?]+/g) || [text];
  const chunks = [];
  let cur = "";
  for (const s of sentences) {
    if ((cur + s).length > approxSize && cur.length > 200) {
      chunks.push(cur.trim());
      cur = s;
    } else {
      cur += " " + s;
    }
  }
  if (cur.trim()) chunks.push(cur.trim());
  return chunks;
}

async function main() {
  const out = { created: new Date().toISOString(), docs: [] };

  for (const url of PAGES) {
    console.log("Fetching", url);
    try {
      const r = await fetch(url, { headers: { "User-Agent": "GEL-Scraper/1.0" }});
      if (!r.ok) {
        console.warn("Failed to fetch", url, r.status);
        continue;
      }
      const html = await r.text();
      const text = stripHtml(html);
      const chunks = chunkText(text, 900);
      chunks.forEach((c, i) => out.docs.push({ url, index: i, content: c }));
      console.log(`  -> ${chunks.length} chunks.`);
      // small delay between fetches
      await new Promise(r => setTimeout(r, 200));
    } catch (err) {
      console.error("Error", err);
    }
  }

  // ensure public folder exists
  if (!fs.existsSync("public")) fs.mkdirSync("public");
  fs.writeFileSync("public/knowledge.json", JSON.stringify(out, null, 2));
  console.log("Wrote public/knowledge.json with", out.docs.length, "chunks.");
}

main();
