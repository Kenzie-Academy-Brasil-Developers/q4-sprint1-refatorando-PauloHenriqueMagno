import { companies } from "../../config/database.js";

const deleteCompanyVehicle = async (req, res) => {
  const { plate } = req.params;

  const { company } = req;

  const companyIndex = companies.findIndex((anyCompany) => anyCompany.cnpj == cnpj);

  companies[companyIndex].vehicles = company.vehicles.filter(
    (vehicle) => vehicle.plate !== plate
  );

  res
    .status(200)
    .json({ messagem: "Vehicle deleted", vehicles: company.vehicles });
};

export default deleteCompanyVehicle;