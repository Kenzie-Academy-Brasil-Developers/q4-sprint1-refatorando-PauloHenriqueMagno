import { companies } from "../../config/database.js";

const modifyCompanyVehiclePlate = (req, res) => {
  const { vehicle, company } = req;

  const updatedVehicle = { ...vehicle, ...req.body };

  const companyIndex = companies.findIndex((anyCompany) => anyCompany.cnpj == cnpj);

  const index = company.vehicles.indexOf(vehicle);

  company.vehicles[index] = updatedVehicle;

  companies[companyIndex].vehicles = company.vehicles;

  res
    .status(200)
    .json({ message: "Vehicle updated", vehicle: updatedVehicle });
};

export default modifyCompanyVehiclePlate;