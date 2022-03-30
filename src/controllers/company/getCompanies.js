import { companies } from "../../config/database.js";

const getCompanies = (_, res) => {
  res.status(200).json(companies);
};

export default getCompanies;