import companies from '../config/database';

const verifyDuplicateCnpj = (req, res, next) => {
  const { cnpj } = req.body;

  const company = companies.find((anyCompany) => anyCompany.cnpj === cnpj);

  if (company) {
    return res.status(409).json({ message: 'CNPJ already registered' });
  }

  return next();
};

export default verifyDuplicateCnpj;
