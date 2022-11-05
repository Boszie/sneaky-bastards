import 'dotenv/config';
import express, { Application } from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';
import config from '../config';
import { appRouter } from './api';
import { createContext } from './trpc';

const { json, urlencoded } = bodyParser;

const app: Application = express();
const port = config.PORT;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(compression());

app.use(
  '/api/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on port ${port}`);
});
