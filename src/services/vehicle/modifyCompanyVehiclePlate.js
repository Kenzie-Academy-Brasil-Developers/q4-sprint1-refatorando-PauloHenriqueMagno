import companies from '../../config/database';

const modifyCompanyVehiclePlateService = (req) => {
  const { vehicle, company } = req;

  const updatedVehicle = { ...vehicle, ...req.body };

  const companyIndex = companies.findIndex((anyCompany) => anyCompany.cnpj === company.cnpj);

  const vehicleIndex = company.vehicles.indexOf(vehicle);

  company.vehicles[vehicleIndex] = updatedVehicle;

  companies[companyIndex].vehicles = company.vehicles;

  return updatedVehicle;
};

export default modifyCompanyVehiclePlateService;
