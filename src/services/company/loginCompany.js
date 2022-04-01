import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import companies from '../../config/database';
import jwtConfig from '../../config/jwtConfig';

const loginCompanyService = async (req, res) => {
  const { cnpj, password } = req.body;

  if (!cnpj) {
    return res.status(400).json({ message: 'cnpj is required' });
  }

  if (!password) {
    return res.status(400).json({ message: 'password is required' });
  }

  const company = await companies.find((anyCompany) => anyCompany.cnpj === cnpj);

  const match = await bcrypt.compare(password, company.password);

  if (!company) {
    return res.status(401).json({ message: 'Company not found' });
  }

  if (!match) {
    return res.status(401).json({ message: 'User and password missmatch.' });
  }

  const token = jwt.sign({ cnpj }, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn,
  });

  const response = { token, company };

  return response;
};

export default loginCompanyService;
