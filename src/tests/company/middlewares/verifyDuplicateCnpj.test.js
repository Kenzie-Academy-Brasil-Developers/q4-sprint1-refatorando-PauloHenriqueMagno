import { describe, expect, it } from '@jest/globals';

import { verifyDuplicateCnpj } from '../../../middlewares';

import companies from '../../../config/database';

import { newCompanyDataThree } from '../companyDataTest';
import { mockNext, mockReq, mockRes } from './mockData';

describe('Verify Duplicate Cnpj Middleware Test', () => {
  it(`Should register a company and verify if it's company cnpj exists in dabase and return CNPJ already registered`, async () => {
    mockReq.body = newCompanyDataThree;

    companies.push(newCompanyDataThree);

    verifyDuplicateCnpj(mockReq, mockRes, mockNext);

    expect(mockRes.status).toBeCalledWith(409);
    expect(mockRes.json).toBeCalledWith({ message: 'CNPJ already registered' });
  });
});
