import express, { Application } from 'express';
import * as trpc from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';

const { json, urlencoded } = bodyParser;

const app: Application = express();
const port = 8080;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors);
app.use(helmet);
app.use(compression);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running`);
});
