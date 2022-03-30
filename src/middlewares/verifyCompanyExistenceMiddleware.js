import { companies } from "../config/database.js";

const verifyCompanyExistence = async (req, res, next) => {
  const { cnpj } = req.params;

  const company = await companies.find((company) => company.cnpj == cnpj);

  if (!company) {
    return res.status(400).json({ message: "Company not registered" });
  }

  req.company = company;

  return next();
};

export default verifyCompanyExistence;