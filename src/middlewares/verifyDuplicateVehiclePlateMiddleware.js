import companies from '../config/database';

const verifyDuplicateVehiclePlate = (req, res, next) => {
  const { plate } = req.body;

  const vehicle = companies.some((company) => {
    const alreadyExists = company.vehicles.some((anyVehicle) => anyVehicle.plate === plate);

    return alreadyExists;
  });

  if (vehicle) {
    return res.status(400).json({ message: 'Vehicle already registered' });
  }

  return next();
};

export default verifyDuplicateVehiclePlate;
