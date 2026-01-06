// src/components/ChatWidget.tsx
import React, { useEffect, useRef, useState } from 'react';

type Message = { id: string; role: 'user' | 'assistant' | 'system'; text: string; time: number };

function uid(prefix = '') {
  return prefix + Math.random().toString(36).slice(2, 9);
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const raw = localStorage.getItem('gel_chat_history');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  // auto-scroll
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
    localStorage.setItem('gel_chat_history', JSON.stringify(messages.slice(-50))); // keep last 50 messages
  }, [messages]);

  const send = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: uid('u_'), role: 'user', text: text.trim(), time: Date.now() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Unknown' }));
        throw new Error(err?.error || `Status ${res.status}`);
      }

      const data = await res.json();
      const botText = data?.response || 'Sorry — no reply from the assistant.';
      const botMsg: Message = { id: uid('b_'), role: 'assistant', text: botText, time: Date.now() };
      setMessages((m) => [...m, botMsg]);
    } catch (err: any) {
      console.error('Chat error', err);
      const errMsg: Message = { id: uid('e_'), role: 'assistant', text: 'There was an error sending your message. Please try again later.', time: Date.now() };
      setMessages((m) => [...m, errMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    send(input);
  };

  const clearHistory = () => {
    setMessages([]);
    localStorage.removeItem('gel_chat_history');
  };

  return (
    <>
      {/* Floating button */}
      <div style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 2000 }}>
        <button
          onClick={() => setOpen((s) => !s)}
          style={{
            width: 56,
            height: 56,
            borderRadius: 28,
            background: '#003366',
            color: '#fff',
            border: 'none',
            boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
            cursor: 'pointer',
            fontWeight: 700,
          }}
          aria-label="Open chat"
          title="Chat with GEL"
        >
          {open ? '✕' : '💬'}
        </button>
      </div>

      {/* Panel */}
      {open && (
        <div
          style={{
            position: 'fixed',
            right: 20,
            bottom: 92,
            width: 360,
            maxWidth: 'calc(100vw - 40px)',
            height: 520,
            maxHeight: '75vh',
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
            zIndex: 2001,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#6B2327', color: '#fff' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#003366', fontWeight: 700 }}>
                GEL
              </div>
              <strong style={{ fontSize: 16 }}>GEL Chat</strong>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button title="Clear" onClick={clearHistory} style={{ background: 'transparent', color: '#fff', border: 'none', cursor: 'pointer' }}>Clear</button>
              <button onClick={() => setOpen(false)} style={{ background: 'transparent', color: '#fff', border: 'none', cursor: 'pointer' }}>Close</button>
            </div>
          </div>

          {/* Messages container */}
          <div ref={messagesRef} style={{ padding: 12, overflowY: 'auto', flex: 1, background: 'linear-gradient(180deg,#fff,#f6f6f6)' }}>
            {messages.length === 0 && (
              <div style={{ textAlign: 'center', color: '#666', paddingTop: 24 }}>
                <div style={{ fontWeight: 600, color: '#003366' }}>Hello 👋</div>
                <div style={{ fontSize: 13 }}>Ask me about GEL, our programs, or how to get involved.</div>
              </div>
            )}
            {messages.map((m) => (
              <div key={m.id} style={{ marginBottom: 12, display: 'flex', flexDirection: m.role === 'user' ? 'row-reverse' : 'row', gap: 8 }}>
                <div style={{ flex: '0 0 auto' }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    background: m.role === 'user' ? '#003366' : '#E8EEF8',
                    color: m.role === 'user' ? '#fff' : '#003366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: 12
                  }}>
                    {m.role === 'user' ? 'U' : 'G'}
                  </div>
                </div>

                <div style={{ maxWidth: '78%', background: m.role === 'user' ? '#003366' : '#fff', color: m.role === 'user' ? '#fff' : '#003366', padding: '10px 12px', borderRadius: 10, boxShadow: '0 4px 10px rgba(0,0,0,0.04)' }}>
                  <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: 14 }}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Composer */}
          <form onSubmit={handleSubmit} style={{ padding: 12, borderTop: '1px solid rgba(0,0,0,0.06)', display: 'flex', gap: 8 }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={loading ? 'Sending...' : 'Type a message — press Enter to send'}
              disabled={loading}
              style={{ flex: 1, padding: '10px 12px', borderRadius: 8, border: '1px solid #e6e6e6' }}
            />
            <button type="submit" disabled={loading || !input.trim()} style={{ background: '#003366', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: 8, cursor: 'pointer' }}>
              {loading ? '...' : 'Send'}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
