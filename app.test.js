const request = require("supertest");
const app = require("./app");

describe("GET /mean", () => {
  it("should return the mean of the numbers", async () => {
    const response = await request(app).get("/mean?nums=1,2,3,4,5");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ operation: "mean", value: 3 });
  });

  it("should return 400 if nums are missing", async () => {
    const response = await request(app).get("/mean");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "nums are required." });
  });

  it("should return 400 for invalid numbers", async () => {
    const response = await request(app).get("/mean?nums=1,2,foo");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "foo is not a number" });
  });
});

describe("GET /median", () => {
  it("should return the median of the numbers", async () => {
    const response = await request(app).get("/median?nums=1,2,3,4,5");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ operation: "median", value: 3 });
  });

  it("should return 400 if nums are missing", async () => {
    const response = await request(app).get("/median");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "nums are required." });
  });

  it("should return 400 for invalid numbers", async () => {
    const response = await request(app).get("/median?nums=1,2,foo");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "foo is not a number" });
  });
});

describe("GET /mode", () => {
  it("should return the mode of the numbers", async () => {
    const response = await request(app).get("/mode?nums=1,2,2,3,4,5");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ operation: "mode", value: 2 });
  });

  it("should return 400 if nums are missing", async () => {
    const response = await request(app).get("/mode");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "nums are required." });
  });

  it("should return 400 for invalid numbers", async () => {
    const response = await request(app).get("/mode?nums=1,2,foo");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "foo is not a number" });
  });
});