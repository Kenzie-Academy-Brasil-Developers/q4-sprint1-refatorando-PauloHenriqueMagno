import { describe, expect, it } from '@jest/globals';
import request from 'supertest';

import app from '../../../app';
import { invalidCompanyDataOne } from '../companyDataTest';

describe('Company Model Test', () => {
  it('Should try create an invalid company', async () => {
    const response = await request(app).post('/companies/register').send(invalidCompanyDataOne);

    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual({ error: 'Campo de cnpj obrigátorio' });
  });
});
