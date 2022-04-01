import { Router } from 'express';

import {
  registerCompany,
  registerCompanyVehicles,
  loginCompany,
  getCompanies,
  getCompanyVehicles,
  modifyCompany,
  modifyCompanyVehiclePlate,
  deleteCompany,
  deleteCompanyVehicle,
} from '../controllers/index';

import {
  validate,
  verifyDuplicateCnpj,
  verifyDuplicateVehiclePlate,
  authenticateCompany,
  verifyCompanyExistence,
  verifyVehicleExistence,
} from '../middlewares/index';

import {
  companySchema,
  vehicleSchema,
} from '../models/index';

const route = Router();

const companiesRoutes = (app) => {
  route.post(
    '/register',
    validate(companySchema),
    verifyDuplicateCnpj,
    registerCompany,
  );

  route.post(
    '/login',
    loginCompany,
  );

  route.get('', getCompanies);

  route.put(
    '/:cnpj',
    authenticateCompany,
    verifyCompanyExistence,
    modifyCompany,
  );

  route.delete(
    '/:cnpj',
    authenticateCompany,
    verifyCompanyExistence,
    deleteCompany,
  );

  route.post(
    "/:cnpj/vehicles",
    authenticateCompany,
    verifyCompanyExistence,
    verifyDuplicateVehiclePlate,
    validate(vehicleSchema),
    registerCompanyVehicles,
  );

  route.get(
    "/:cnpj/vehicles",
    authenticateCompany,
    verifyCompanyExistence,
    getCompanyVehicles,
  );

  route.put(
    "/:cnpj/vehicles/:plate",
    authenticateCompany,
    verifyCompanyExistence,
    verifyVehicleExistence,
    modifyCompanyVehiclePlate,
  );

  route.delete(
    "/:cnpj/vehicles/:plate",
    authenticateCompany,
    verifyCompanyExistence,
    verifyVehicleExistence,
    deleteCompanyVehicle,
  );

  app.use('/companies', route);
};

export default companiesRoutes;
