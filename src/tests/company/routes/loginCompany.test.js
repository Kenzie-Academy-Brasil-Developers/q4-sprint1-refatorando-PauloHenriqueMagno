import { describe, expect, it } from '@jest/globals';
import request from 'supertest';

import app from '../../../app';

import { loginCompanyDataTwo, newCompanyDataTwo } from '../companyDataTest';

describe('Company Login Test', () => {
  it('Should create a company', async () => {
    const response = await request(app).post('/companies/register').send(newCompanyDataTwo);

    expect(response.statusCode).toBe(201);
    expect(response.body.message).toStrictEqual('Company successfully created');
  });

  it('Should loging and receive a token and current company', async () => {
    const response = await request(app).post('/companies/login').send(loginCompanyDataTwo);

    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeDefined();
    expect(response.body.company).toBeDefined();
  });
});
