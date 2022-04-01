import companies from '../../config/database';

const deleteCompanyVehicleService = async (req) => {
  const { plate } = req.params;

  const { company } = req;

  const companyIndex = companies.findIndex((anyCompany) => anyCompany.cnpj === company.cnpj);

  const VehicleToDelete = company.vehicles.find((vehicle) => vehicle.plate === plate);

  companies[companyIndex].vehicles.pop(VehicleToDelete);

  const companyVehicles = companies[companyIndex];

  return companyVehicles;
};

export default deleteCompanyVehicleService;
