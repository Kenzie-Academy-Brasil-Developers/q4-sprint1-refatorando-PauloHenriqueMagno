import companies from '../config/database';

const verifyVehicleExistence = (req, res, next) => {
  const { plate } = req.params;

  const vehicle = companies.some((company) => {
    const exist = company.vehicles.some((anyVehicle) => anyVehicle.plate === plate);

    return exist;
  });

  if (!vehicle) {
    return res.status(400).json({ message: 'Vehicle not registered' });
  }

  req.vehicle = vehicle;

  return next();
};

export default verifyVehicleExistence;
