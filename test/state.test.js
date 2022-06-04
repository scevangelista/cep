const request = require("supertest");
const ApiUrl = "http://localhost:3500";

describe("GET /api/v1/states", () => {
  it("Expect 200 and list of states with first position name = Rondônia", () => {
    return request(ApiUrl)
      .get("/api/v1/states")
      .expect(200)
      .then(response => {
        expect(Buffer.from(response.body[0].name, 'utf-8').toString()).toEqual("Rondônia");
      });
  });
});

describe("GET /api/v1/states/country/:code", () => {
  it("Expect 200 and list of states with first position name = Acre", () => {
    return request(ApiUrl)
      .get("/api/v1/states/country/1058")
      .expect(200)
      .then(response => {
        expect(Buffer.from(response.body[1].name, 'utf-8').toString()).toEqual("Acre");
      });
  });
});

describe("GET /api/v1/states/:code", () => {
  it("Expect 200 and name = São Paulo", () => {
    return request(ApiUrl)
      .get("/api/v1/states/35")
      .expect(200)
      .then(response => {
        expect(Buffer.from(response.body[0].name, 'utf-8').toString()).toEqual("São Paulo");
      });
  });
});
