import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { JSONParseError } from './shared/middleware';
import './shared/services/TranslationsYup';
import { router } from './routes';


const server = express();


server.use(cors({
  origin: process.env.ENABLED_CORS?.split(';') || []
}));

server.use(express.json());

server.use(JSONParseError);

server.use(router);


export { server };
