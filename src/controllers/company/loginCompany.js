import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { companies } from "../../config/database.js";
import jwtConfig from '../../config/jwtConfig.js';

const loginCompany = async (req, res) => {
  const { cnpj, password } = req.body;

  if (!cnpj) {
    return res.status(400).json({ message: "cnpj is required" });
  }
  if (!password) {
    return res.status(400).json({ message: "password is required" });
  }

  const company = await companies.find((company) => company.cnpj === cnpj);

  const match = await bcrypt.compare(password, company.password);

  if (!company) {
    return res.status(401).json({ message: "Company not found" });
  }
  if (!match) {
    return res.status(401).json({ message: "User and password missmatch." });
  }

  const token = jwt.sign({ cnpj: cnpj }, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn,
  });

  return res.status(200).json({ token, company });
};

export default loginCompany;