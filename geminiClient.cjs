require('dotenv').config();

const genai = require('genai');

const client = genai.Client
  ? new genai.Client({
      apiKey: process.env.GEMINI_API_KEY,
      model: 'gemini-1.5-flash',
    })
  : genai.default
  ? new genai.default.Client({
      apiKey: process.env.GEMINI_API_KEY,
      model: 'gemini-1.5-flash',
    })
  : (() => {
      throw new Error('Could not find Client constructor in genai package');
    })();

module.exports = client;
