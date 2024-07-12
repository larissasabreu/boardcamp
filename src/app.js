import express, { json } from 'express';
import dotenv from "dotenv";

import JogosRouter from './routes/jogos-router.js';

dotenv.config();

const app = express();
app.use(json());

// app
app.use(JogosRouter);

const port = process.env.PORT || 5000 ;
app.listen(port, () => console.log(`porta ${port}`));