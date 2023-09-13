import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalle from './dalle.routes.js';

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
   res.status(200).json({ message: 'cai lon ma' });
});

app.use('/api/v1/dalle', dalle);

app.listen(8080, () => console.log('server is runing'));
