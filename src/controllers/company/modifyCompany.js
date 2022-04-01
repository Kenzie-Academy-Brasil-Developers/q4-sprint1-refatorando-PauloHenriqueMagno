import { modifyCompanyService } from '../../services';

const modifyCompany = (req, res) => {
  const updatedCompany = modifyCompanyService(req);

  res.status(200).json({ messagem: 'Company updated', updatedCompany });
};

export default modifyCompany;
