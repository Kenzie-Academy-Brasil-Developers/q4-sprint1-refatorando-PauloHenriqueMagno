import { jest } from "@jest/globals";

const mockNext = jest.fn();
const mockReq = {};
const mockRes = {};

mockRes.status = jest.fn().mockReturnValue(mockRes);
mockRes.json = jest.fn().mockReturnValue(mockRes);

export { mockNext, mockReq, mockRes };