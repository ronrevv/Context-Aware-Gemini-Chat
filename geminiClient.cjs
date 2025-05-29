// geminiClient.cjs
require('dotenv').config();

const { Client } = require('genai');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = 'gemini-1.5-flash';

const client = new Client({
  apiKey: GEMINI_API_KEY,
  model: MODEL_NAME,
});

module.exports = client;
