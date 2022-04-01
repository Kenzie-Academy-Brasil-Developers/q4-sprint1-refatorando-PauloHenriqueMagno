import { v4 as uuidv4 } from 'uuid';

import companies from '../../config/database';

const registerCompanyVehiclesService = async (req) => {
  const newVehicle = {
    ...req.body,
    id: uuidv4(),
    acquisition_date: new Date(),
  };

  const { cnpj } = req.params;

  const companyIndex = companies.findIndex((anyCompany) => anyCompany.cnpj === cnpj);

  companies[companyIndex].vehicles.push(newVehicle);

  return newVehicle;
};

export default registerCompanyVehiclesService;
