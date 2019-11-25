const api = require('../api');
const supertest = require('supertest');
const { API_HOST, API_PORT, API_BASE_URL } = require('../config');

describe('#forecast', () => {
  let server;
  beforeEach((done) => {
    server = api.run(API_PORT, API_HOST, done);
  });

  afterEach((done) => {
    server.close(done);
  });

  // The reson not to call directly the service method (forecastService.get()) is that
  // By external request the test goes through the entire flow
  // i.e route/controller/service etc...
  it ('Should return forecast data', async () => {
    const endpoint = `${API_BASE_URL}/forecast/weekly`;
    const request = supertest(server);
    const response = await request.get(endpoint);

    expect(response.status).toBe(200);
    expect(response.body.data).not.toBe(null);
    expect(response.body.errors).toEqual([]);
  });
});
