import expressListRoutes from 'express-list-routes';

import app from './app';

expressListRoutes(app);

const PORT = process.env.RUN_PORT ? process.env.RUN_PORT : '3000';

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`\nApp is runnining on port ${PORT}`));
