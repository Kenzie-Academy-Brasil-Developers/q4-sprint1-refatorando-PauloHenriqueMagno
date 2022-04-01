import { describe, expect, it } from '@jest/globals';
import request from 'supertest';
import app from '../../../app';

import { newCompanyDataOne } from '../companyDataTest';

describe('Company Register Test', () => {
  it('Should create a company', async () => {
    const response = await request(app).post('/companies/register').send(newCompanyDataOne);

    expect(response.statusCode).toBe(201);
    expect(response.body.message).toStrictEqual('Company successfully created');
  });
});
