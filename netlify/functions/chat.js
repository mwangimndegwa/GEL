// netlify/functions/chat.js
// Netlify serverless function that proxies requests to Google Generative Language (Gemini).
// IMPORTANT: Set GEMINI_API_KEY in Netlify environment variables (do NOT hardcode the key).

exports.handler = async function (event, context) {
  // Allow preflight CORS and simple GET (helps when testing from the browser)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Method Not Allowed. Use POST.' }),
    };
  }

  // parse body
  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch (err) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Invalid JSON body' }),
    };
  }

  const userMessage = body.message;
  if (!userMessage || typeof userMessage !== 'string') {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Missing "message" in request body' }),
    };
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY not set in environment');
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Server misconfiguration: API key missing' }),
    };
  }

  // System prompt — keep it short here; for more context you can expand server-side safely
  const systemPrompt = `
You are a helpful assistant for Global Educated Leaders (GEL). Be polite, concise, and encouraging.
`;

  const fullPrompt = `${systemPrompt}\nUser: ${userMessage}`;

  // The exact URL used by your previous attempts — change model name if needed
  const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

  const payload = {
    // some Gemini endpoints accept "contents" with "parts". This mirrors previous code you've used.
    contents: [{ parts: [{ text: fullPrompt }] }],
    // optionally tune parameters here (safety, temperature, etc.)
  };

  try {
    const resp = await fetch(`${GEMINI_API_URL}?key=${encodeURIComponent(GEMINI_API_KEY)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await resp.text();

    // try parse JSON
    let data;
    try {
      data = JSON.parse(text);
    } catch (parseErr) {
      console.error('Gemini response not JSON:', text);
      return {
        statusCode: 502,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Bad response from Gemini API', raw: text }),
      };
    }

    if (!resp.ok) {
      console.error('Gemini API returned error:', data);
      return {
        statusCode: 502,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Gemini API error', details: data }),
      };
    }

    // extract text - defensive checks
    const responseText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      data?.output?.[0]?.content?.[0]?.text || // alternate shapes
      'No response from Gemini.';

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ response: responseText }),
    };
  } catch (err) {
    console.error('Fetch to Gemini failed:', err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Failed to contact Gemini API', details: String(err) }),
    };
  }
};
