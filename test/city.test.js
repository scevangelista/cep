const request = require("supertest");
const ApiUrl = "http://localhost:3500";

describe("GET /api/v1/cities", () => {
  it("Expect 200 and list of cities with first position name = Alta Floresta D'Oeste", () => {
    return request(ApiUrl)
      .get("/api/v1/cities")
      .expect(200)
      .then(response => {
        expect(response.body[0].name).toEqual("Alta Floresta D'Oeste");
      });
  });
});

describe("GET /api/v1/cities/state/:code", () => {
  it("Expect 200 and list of cities with first position name = Abadia dos Dourados", () => {
    return request(ApiUrl)
      .get("/api/v1/cities/state/31")
      .expect(200)
      .then(response => {
        expect(response.body[0].name).toEqual("Abadia dos Dourados");
      });
  });
});

describe("GET /api/v1/cities/:code", () => {
  it("Expect 200 and name = Curitiba", () => {
    return request(ApiUrl)
      .get("/api/v1/cities/4106902")
      .expect(200)
      .then(response => {
        expect(response.body[0].name).toEqual("Curitiba");
      });
  });
});