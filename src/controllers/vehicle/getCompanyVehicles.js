import companies from '../../config/database';

const getCompanyVehicles = (req, res) => {
  const { company } = req;

  const companyVehicles = companies.find((anyCompany) => anyCompany.id === company.id).vehicles;

  res.status(200).json(companyVehicles);
};

export default getCompanyVehicles;
