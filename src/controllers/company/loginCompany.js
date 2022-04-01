import { loginCompanyService } from '../../services';

const loginCompany = async (req, res) => {
  const response = await loginCompanyService(req);

  return res.status(200).json(response);
};

export default loginCompany;
