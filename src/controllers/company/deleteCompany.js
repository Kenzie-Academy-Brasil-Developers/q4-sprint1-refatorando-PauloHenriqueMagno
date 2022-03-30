import { companies } from "../../config/database.js";

const deleteCompany = (req, res) => {
  const { cnpj } = req.params;

  companies = companies.filter((company) => company.cnpj !== cnpj);

  res.status(200).json({ messagem: "Company deleted", companies });
};

export default deleteCompany;