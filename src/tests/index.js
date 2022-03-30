import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import app from "./app";

describe("Company Tests", () => {
  it("Should create a company", async () => {
    const response = await request(app).post("/companies/register").send(user);

    expect(response.statusCode).toBe(201);
  });

  it("Should loging and receive a token", async () => {
    const response = await request(app).post("/companies/login").send();

    expect(response.statusCode).toBe(201);
    expect(response.body).toStrictEqual(user);
  });

  it("Should get users", async () => {
    const response = await request(app).get("/users");

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(2);
  });
});