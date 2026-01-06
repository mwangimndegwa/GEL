// netlify/functions/chat.js
// Netlify function (CommonJS) that proxies a request to the Gemini Generative API.
// IMPORTANT: set GEMINI_API_KEY in your Netlify site env vars (do NOT hardcode keys).

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

exports.handler = async function (event, context) {
  try {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method not allowed. Use POST.' }),
      };
    }

    // Parse JSON body (Netlify passes body as string)
    let body;
    try {
      body = JSON.parse(event.body || '{}');
    } catch (e) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid JSON body' }),
      };
    }

    const message = body.message;
    if (!message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Message is required' }),
      };
    }

    // Use environment variable for API key
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      console.error('No GEMINI_API_KEY in environment');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server not configured (missing API key).' }),
      };
    }

    // Build the system prompt + user message
    const systemPrompt = `
You are the GEL Chatbot, the digital ambassador for GEL (Global Educated Leaders). 
Be polite, positive, and helpful. End responses with an encouraging sign-off.
`; // keep short here; you can extend if needed

    const fullPrompt = `${systemPrompt}\nUser: ${message}`;

    // Call Gemini API
    const apiRes = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Keep the structure similar to what worked before
        contents: [{ parts: [{ text: fullPrompt }] }],
      }),
    });

    const text = await apiRes.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      console.error('Gemini returned non-JSON:', text);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: 'Bad response from Gemini API', raw: text }),
      };
    }

    if (!apiRes.ok) {
      console.error('Gemini API error:', data);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: data.error?.message || 'Gemini API error', details: data }),
      };
    }

    // The older response shape used "candidates" → "content" → "parts"
    const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? data?.outputs?.[0]?.content?.text ?? null;
    if (!responseText) {
      console.warn('No generated text found in Gemini response:', data);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: 'No response from Gemini', details: data }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ response: responseText }),
    };
  } catch (err) {
    console.error('Function error', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error', details: err?.message || err }),
    };
  }
};
