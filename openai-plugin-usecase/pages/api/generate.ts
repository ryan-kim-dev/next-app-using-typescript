import type { NextApiRequest, NextApiResponse } from 'next';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

type Data = {
  model: string;
  prompt: string;
  temperature: number;
  max_tokens: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  stop: string[];
};

export default async function generator(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!configuration.apiKey)
    return res.status(500).json({
      error: {
        message: 'api 키가 없습니다',
      },
    });
  const description = req.body.descriptionValue;
  const response: any = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: description,
    temperature: 0,
    max_tokens: 150,
    top_p: 1.0,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
    stop: ['You:'],
  });

  res.status(200).json({ result: response.data.choices[0].text });
}
