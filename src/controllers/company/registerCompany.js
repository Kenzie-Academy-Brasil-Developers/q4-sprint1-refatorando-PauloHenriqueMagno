import { registerCompanyService } from '../../services';

const registerCompany = async (req, res) => {
  const newCompany = await registerCompanyService(req);

  res.status(201).json({ message: "Company successfully created", company: newCompany });
};

export default registerCompany;
