const request = require("supertest")
const app = require("../server/app")

describe("Get /Shows the Home page", () => {
  test("Should show home", done => {
    request(app)
      .get("/")
      .expect(200)
      .end(done)
  })
})

describe("POST /Adds new User to DB", () => {
  test("Adds a new user to DB", done => {
    request(app)
    .post("/newUser").send({
      name: "Test Username",
      email: "test@example.com",
      phone: "670000111",
      password: "password"
    })
    .expect(response => {
        expect(response.status).toBe(201) 
    })
    .end(done)
  })
})

describe("POST /Login", () => {
  test("Verifies if User is in DB for login", done => {
    request(app)
      .post("/verifyUser").send({
        email: "test@example.com",
        password: "password"
      })
      .expect(200)
      .end(done)
  })
})

