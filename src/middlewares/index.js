import validate from './validateMiddleware';
import authenticateCompany from './authenticateCompanyMiddleware';
import verifyVehicleExistence from './verifyVehicleExistenceMiddleware';
import verifyCompanyExistence from './verifyCompanyExistenceMiddleware';
import verifyDuplicateVehiclePlate from './verifyDuplicateVehiclePlateMiddleware';
import verifyDuplicateCnpj from './verifyDuplicateCnpjMiddleware';

export {
  validate,
  authenticateCompany,
  verifyVehicleExistence,
  verifyCompanyExistence,
  verifyDuplicateVehiclePlate,
  verifyDuplicateCnpj,
};
