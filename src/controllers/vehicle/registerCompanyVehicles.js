import { registerCompanyVehiclesService } from '../../services';

const registerCompanyVehicles = async (req, res) => {
  const { company } = req;
  const newVehicle = registerCompanyVehiclesService(req);

  res.status(201).json({
    message: `Vehicle ${newVehicle.model} from year ${newVehicle.year} was acquired to the ${company.name}'s fleet`,
    vehicle: newVehicle,
  });
};

export default registerCompanyVehicles;
