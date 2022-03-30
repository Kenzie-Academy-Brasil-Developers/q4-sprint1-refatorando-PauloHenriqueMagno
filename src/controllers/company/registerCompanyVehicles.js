import { companies } from "../../config/database.js";

const registerCompanyVehicles = async (req, res) => {
  const newVehicle = {
    ...req.body,
    id: uuidv4(),
    acquisition_date: new Date(),
  };

  const { cnpj } = req.params;
  const { company } = req;

  const companyIndex = companies.findIndex((anyCompany) => anyCompany.cnpj == cnpj);

  company.vehicles.push(newVehicle);

  companies[companyIndex].vehicles = company.vehicles

  res.status(201).json({
    message: `Vehicle ${newVehicle.model} from year ${newVehicle.year} was acquired to the ${company.name}'s fleet`,
    vehicle: newVehicle,
  });
};

export default registerCompanyVehicles;