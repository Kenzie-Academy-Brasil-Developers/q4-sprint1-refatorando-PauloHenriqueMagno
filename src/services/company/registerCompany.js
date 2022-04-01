import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

import companies from '../../config/database';

const registerCompanyService = async (req) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const newCompany = {
    ...req.body,
    id: uuidv4(),
    vehicles: [],
    password: hashedPassword,
  };

  companies.push(newCompany);

  return newCompany;
};

export default registerCompanyService;
