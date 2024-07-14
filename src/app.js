import express, { json } from 'express';
import "express-async-errors"; 
import dotenv from "dotenv";

import JogosRouter from './routes/jogos-router.js';
import ClientesRouter from './routes/clientes-router.js';
import AlugueisRouter from './routes/alugueis-router.js';
import errorHandler from "./middlewares/errorHandles-middleware.js"

dotenv.config();

const app = express();
app.use(json());

// app
app.use(JogosRouter);
app.use(ClientesRouter);
app.use(AlugueisRouter);
app.use(errorHandler);

const port = process.env.PORT || 5000 ;
app.listen(port, () => console.log(`porta ${port}`));