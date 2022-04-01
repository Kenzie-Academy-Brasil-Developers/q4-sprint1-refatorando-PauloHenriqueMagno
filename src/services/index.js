import registerCompanyService from './company/registerCompany';
import loginCompanyService from './company/loginCompany';
import modifyCompanyService from './company/modifyCompany';
import deleteCompanyService from './company/deleteCompany';

import registerCompanyVehiclesService from './vehicle/registerCompanyVehicles';
import modifyCompanyVehiclePlateService from './vehicle/modifyCompanyVehiclePlate';
import deleteCompanyVehicleService from './vehicle/deleteCompanyVehicle';

export {
  loginCompanyService,
  registerCompanyService,
  deleteCompanyService,
  modifyCompanyService,

  registerCompanyVehiclesService,
  deleteCompanyVehicleService,
  modifyCompanyVehiclePlateService,
};
