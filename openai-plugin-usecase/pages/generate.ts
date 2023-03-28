import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: 'text-davinci-003',
  prompt:
    'You: How do I combine arrays?\nJavaScript chatbot: You can use the concat() method.\nYou: How do you make an alert appear after 10 seconds?\nJavaScript chatbot',
  temperature: 0,
  max_tokens: 150,
  top_p: 1.0,
  frequency_penalty: 0.5,
  presence_penalty: 0.0,
  stop: ['You:'],
});

/**
 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
 */
