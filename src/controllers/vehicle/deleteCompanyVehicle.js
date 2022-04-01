import { deleteCompanyVehicleService } from '../../services';

const deleteCompanyVehicle = async (req, res) => {
  const companyVehicles = await deleteCompanyVehicleService(req);

  res
    .status(200)
    .json({ messagem: "Vehicle deleted", vehicles: companyVehicles });
};

export default deleteCompanyVehicle;
