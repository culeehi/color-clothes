import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const config = new Configuration({
   apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi();

router.route('/').get((req, res) => {
   res.status(200).json({ meseage: 'kb ddaay laf cais gif luoon' });
});

router.route('/').post(async (res, req) => {
   try {
      const { prompt } = req.body;
      const reponse = await openai.createImage({
         prompt,
         n: 1,
         size: '1024x1024',
         response_format: 'b64_json',
      });

      const image = reponse.data.data[0].b64_json;
      res.status(200).json({ photo: image });
   } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Something' });
   }
});

export default router;
