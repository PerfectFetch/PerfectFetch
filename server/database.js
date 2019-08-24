//this is a driver
// const pg = require('pg')
// const uri = 'postgres://localhost/fetchdb'
// const client = new pg.Client(uri)

//here we will have connection to the database
//need to register account on elephant sql

//this is the info we are going to use to connect to the elephant who will name our database.
//all hail the elpehant


// require('dotenv').config();
const { Pool, Client } = require('pg');
const connectionString = 'postgres://bnxielvz:HpGxoh62wYeZEwsB3DioGCLaEo2LDbwE@isilo.db.elephantsql.com:5432/bnxielvz'

const pool = new Pool({
    connectionString: connectionString
})

// const text = 'INSERT INTO users (name, password, email ) VALUES($1, $2, $3)  RETURNING *'
// const values =  ["iumi","1234", "iumi@dog.com" ]

// pool.query(text, values, (err, res) => {
//  console.log(err, res)
//  if (err) console.log(err, "error connecting to db");
//  else { console.log('connected!') }
// //  pool.end()
// })

module.exports = pool;