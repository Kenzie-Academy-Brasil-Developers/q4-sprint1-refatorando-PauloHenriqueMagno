import { companies } from "../config/database.js";

const verifyDuplicateCnpj = (req, res, next) => {
  const { cnpj } = req.body;

  const company = companies.find((company) => company.cnpj == cnpj);

  if (company) {
    return res.status(409).json({ message: "CNPJ already registered" });
  }

  return next();
};

export default verifyDuplicateCnpj;