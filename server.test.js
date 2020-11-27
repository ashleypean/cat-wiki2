const app = require('./server.js')
const request = require('supertest')

describe("Run GET request", () => {
  test("Should return object with list of names", async () => {
    const response = await request(app).get("/")
    //Check if names array exists
    expect(response.body.names).toBeTruthy()
    //Names array should return 67 names
    expect(response.body.names.length).toBe(67)
    //Return 200-OK status code
    expect(response.statusCode).toBe(200)
  })

  test("Should return top 4 cats object", async () => {
    const response = await request(app).get("/")
    //Check if object exists in response 
    expect(response.body.top4).toBeTruthy()
  })
})