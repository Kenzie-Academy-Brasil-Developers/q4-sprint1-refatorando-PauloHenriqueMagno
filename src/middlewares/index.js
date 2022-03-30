import validate from './validateMiddleware.js';
import authenticateCompany from './authenticateCompanyMiddleware.js';
import verifyVehicleExistence from './verifyVehicleExistenceMiddleware.js';
import verifyCompanyExistence from './verifyCompanyExistenceMiddleware.js';
import verifyDuplicateVehiclePlate from './verifyDuplicateVehiclePlateMiddleware.js';
import verifyDuplicateCnpj from './verifyDuplicateCnpjMiddleware.js';

export {
  validate,
  authenticateCompany,
  verifyVehicleExistence,
  verifyCompanyExistence,
  verifyDuplicateVehiclePlate,
  verifyDuplicateCnpj
};