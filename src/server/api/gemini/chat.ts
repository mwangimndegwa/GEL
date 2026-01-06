// server/api/chat.ts  (or wherever your Express handler lives)
// Gemini Chat API Proxy - safer, with timeout and better error handling

import type { Request, Response } from 'express';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error('GEMINI_API_KEY is not set in environment variables!');
}

// NOTE: use the exact model endpoint you have enabled in your GCP project.
// If you prefer using ?key= you can append `?key=${GEMINI_API_KEY}` to the URL.
const GEMINI_API_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const DEFAULT_TIMEOUT_MS = 20_000;

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Server not configured: missing GEMINI_API_KEY' });
  }

  const { message } = req.body ?? {};
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required and must be a string' });
  }

  const systemPrompt = `
You are the GEL Chatbot, the digital ambassador for GEL (Global Educated Leaders)...
(Keep your system prompt here - omitted for brevity in this snippet)
`;

  const fullPrompt = `${systemPrompt}\nUser: ${message}`;

  // AbortController to enforce timeout
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS);

  try {
    const body = {
      // The top-level request object content can vary by API version.
      // This matches your earlier usage (contents > parts > text).
      // If your model requires a different shape, adapt accordingly.
      contents: [{ parts: [{ text: fullPrompt }] }],
    };

    const apiRes = await fetch(`${GEMINI_API_URL}`, {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        // Two common options; API key as query param is reliable:
        // 'X-goog-api-key': GEMINI_API_KEY,
        // or use Authorization with OAuth bearer token for service accounts.
      },
      // If API key-as-query is preferred, append ?key=... to the URL above.
      body: JSON.stringify(body),
    });

    clearTimeout(timeout);

    // Try to parse JSON; if invalid JSON, fall back to text.
    let data: any;
    try {
      data = await apiRes.json();
    } catch (jsonErr) {
      const raw = await apiRes.text();
      console.error('Gemini returned non-JSON response:', raw);
      return res.status(502).json({ error: 'Upstream returned non-JSON', details: raw });
    }

    if (!apiRes.ok) {
      // Log error details for debugging (don't leak secrets to users)
      console.error('Gemini API error status:', apiRes.status, data);
      const message = data?.error?.message || data?.status || 'Upstream error';
      return res.status(502).json({ error: 'Gemini API error', message, details: data });
    }

    // Your previous code relied on data.candidates[0].content.parts[0].text
    const responseText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      data?.candidates?.[0]?.content?.[0]?.text ||
      data?.output?.[0]?.content?.[0]?.text || // some response shapes vary
      null;

    if (!responseText) {
      console.warn('No text found in Gemini response:', data);
      return res.status(502).json({ error: 'No textual response from Gemini', details: data });
    }

    return res.status(200).json({ response: responseText });
  } catch (err: any) {
    clearTimeout(timeout);
    if (err?.name === 'AbortError') {
      console.error('Gemini request timed out');
      return res.status(504).json({ error: 'Upstream request timed out' });
    }
    console.error('Gemini API fetch error:', err);
    return res.status(500).json({ error: 'Failed to contact Gemini API', details: err?.message || String(err) });
  }
}
