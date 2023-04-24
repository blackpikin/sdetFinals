const mysql = require('mysql')
const {pool} = require('../database/database')

async function GetService(id){
    const promise = await new Promise((resolve, reject) => {
        let selectQuery = 'SELECT * FROM ?? WHERE ?? = ?'
        let query = mysql.format(selectQuery, ["services", "id",id])
        pool.query(query, (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            resolve(data)
        });
    }) 
    return promise
}

module.exports = {GetService}