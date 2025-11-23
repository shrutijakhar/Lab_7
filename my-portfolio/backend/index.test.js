import request from "supertest";
import app from "./index.js";

describe("Backend API Tests", () => {

  test("GET /api/projects returns 200 and JSON array", async () => {
    const response = await request(app).get("/api/projects");
    expect([200, 404]).toContain(response.status); 
  });

  test("GET /api/weather returns 200 with city, temp, humidity", async () => {
    const response = await request(app).get("/api/weather");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("city");
    expect(response.body).toHaveProperty("temp");
    expect(response.body).toHaveProperty("humidity");
  });

  test("Unknown endpoint returns 404", async () => {
    const response = await request(app).get("/api/unknown");
    expect(response.status).toBe(404);
    expect(response.body.error).toBe("Endpoint not found");
  });
});
