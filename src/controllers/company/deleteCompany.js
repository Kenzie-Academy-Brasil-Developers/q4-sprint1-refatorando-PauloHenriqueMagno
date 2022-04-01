import { deleteCompanyService } from '../../services';

const deleteCompany = (req, res) => {
  const companies = deleteCompanyService(req);

  res.status(200).json({ messagem: 'Company deleted', companies });
};

export default deleteCompany;
