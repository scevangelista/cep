const request = require("supertest");
const ApiUrl = "http://localhost:3500";

describe("GET /api/v1/countries/:code", () => {
  it("Expect 200 and name = Brasil", () => {
    return request(ApiUrl)
      .get("/api/v1/countries/1058")
      .expect(200)
      .then(response => {
        expect(response.body[0].name).toEqual("Brasil");
      });
  });
});