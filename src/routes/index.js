import express from 'express';
import companiesRoutes from './companiesRoutes.js';

const routes = (app) => {
  app.use(express.json());
  companiesRoutes(app);
};

export default routes;