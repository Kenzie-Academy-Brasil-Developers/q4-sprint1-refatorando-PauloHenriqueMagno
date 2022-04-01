import companies from '../../config/database';

const modifyCompanyService = (req) => {
  const { company } = req;
  const updatedCompany = { ...company, ...req.body };

  const companyIndex = companies.indexOf(company);

  companies[companyIndex] = updatedCompany;

  return updatedCompany;
};

export default modifyCompanyService;
