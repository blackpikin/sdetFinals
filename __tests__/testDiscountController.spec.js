const request = require("supertest")
const app = require("../server/app")
const {AutoBronzeDiscount, AutoDiamondDiscount, DiscountCodeAvailable} = require('../controllers/discountController')

describe("CRUD /automatic bronze", () => {
    test("Checks if user is eligible for automatic bronze discount", async () => {
      let discount = await AutoBronzeDiscount()
      expect(discount).toBe(0)
    })
  })

  describe("CRUD /automatic diamond", () => {
    test("Checks if user is eligible for automatic diamond discount", async () => {
      let discount = await AutoDiamondDiscount()
      expect(discount).toBe(0)
    })
  })

describe("GET /Gennerate Codes", () => {
    test("Should Generate 5 discount codes", done => {
        request(app)
        .get("/generateCodes")
        .expect(response => {
          expect(response.status).toBe(200)
          expect(response.body.Codes.length).toEqual(5)
    })
    .end(done)
    })
  })

describe("POST /Apply code", () => {
    test("Should use a discount code", done => {
        request(app)
        .post("/applyCode").send({code: "DOaQ"})
        .expect(response => {
            expect(response.status).toBe(302) //end point redirects to basket (redirect code is 302)
            expect(response.redirect).toBe(true)
        })
        .end(done)
    })
})  
