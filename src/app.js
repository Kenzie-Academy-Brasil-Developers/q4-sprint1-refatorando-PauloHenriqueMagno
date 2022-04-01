import express from 'express';
import dotenv from 'dotenv';

import routes from './routes';

dotenv.config();

const app = express();

routes(app);

export default app;
