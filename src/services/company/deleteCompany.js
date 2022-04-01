import companies from '../../config/database';

const deleteCompanyService = (req) => {
  const { cnpj } = req.params;

  const companyToDelete = companies.find((company) => company.cnpj === cnpj);

  companies.pop(companyToDelete);

  return companies;
};

export default deleteCompanyService;
