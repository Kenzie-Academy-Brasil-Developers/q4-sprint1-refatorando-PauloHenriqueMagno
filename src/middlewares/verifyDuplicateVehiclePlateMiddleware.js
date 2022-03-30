import { companies } from "../config/database.js";

const verifyDuplicateVehiclePlate = (req, res, next) => {
  const { plate } = req.body;

  const vehicle = companies.some((company) =>
    company.vehicles.some((vehicle) => vehicle.plate === plate)
  );

  if (vehicle) {
    return res.status(400).json({ message: "Vehicle already registered" });
  }

  return next();
};

export default verifyDuplicateVehiclePlate;