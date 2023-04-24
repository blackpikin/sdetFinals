const mysql = require('mysql')
const {pool} = require('../database/database')
const request = require("supertest")
const app = require("../server/app")
const {AddToBasket, ShowBasketItems, CountBasketItems, RemoveBasketItem, Checkout, Success, RemoveOverdueItems, AtBasketLimit} = require('../controllers/basketController')

//Setup Function to add fake items to the database
function AddFakeOldBasketItems(n){
   for(let i = 1; i < n; i++){
    let insertQuery = 'INSERT INTO ?? (??,??,??,??,??,??,??) VALUES (?,?,?,?,?,?,?)'
    let query = mysql.format(insertQuery, ["basket", "service_id", "user_id","price","discount","payable", "name", "date_added", i, 15, 200000, 0, 200000, "Test service", "2022-01-11 07:45:06"])
    pool.query(query, (err, response) => {
        if (err) {
            console.error(err)
            return
        }
        // rows added
    });
   }
}

function AddFakeBasketItems(n){
    for(let i = 1; i < n; i++){
     let insertQuery = 'INSERT INTO ?? (??,??,??,??,??,??) VALUES (?,?,?,?,?,?)'
     let query = mysql.format(insertQuery, ["basket", "service_id", "user_id","price","discount","payable", "name", 2, 15, 200000, 0, 200000, "Test service"])
     pool.query(query, (err, response) => {
         if (err) {
             console.error(err)
             return
         }
         // rows added
     });
    }
 }

//Add fake items for Removing overdue
AddFakeOldBasketItems(4)
//Add fake items for testing basket limit
AddFakeBasketItems(11)

describe("POST /Basket Add Operations", () => {
    test("Should remove Overdue items from the basket", async () => {
      let removed = await RemoveOverdueItems()
      expect(Object.keys(removed).length).toBeGreaterThan(0)
      expect(removed[0].name).toBe("Test service")
    })

    test("Should Add an item to the basket", async () => {
        
    })

    test("Should check if basket has reached its limit of 10", async () => {
      let limitReached = await AtBasketLimit(15)
      expect(limitReached).toBe(true)
    })

    test("Should Add a maximum of 10 items to the basket", async () => {
      
    })

    test("Should show an error message if basket limit reached", async () => {
      
    })

})

describe("GET /Basket read Operations", () => {
    test("Should Show basket items", async () => {
      
    })

})