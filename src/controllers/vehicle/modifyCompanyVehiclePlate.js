import { modifyCompanyVehiclePlateService } from '../../services';

const modifyCompanyVehiclePlate = (req, res) => {
  const updatedVehicle = modifyCompanyVehiclePlateService(req);

  res
    .status(200)
    .json({ message: 'Vehicle updated', vehicle: updatedVehicle });
};

export default modifyCompanyVehiclePlate;
