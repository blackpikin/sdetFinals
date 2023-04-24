const {GetService} = require('../controllers/serviceController')

describe("CRUD /GetService", () => {
  test("Gets a service from the DB", async () => {
    let service = await GetService(1)
    expect(Object.keys(service).length).toBe(1)
    expect(service[0].name).toBe('Bronze service')
  })
})