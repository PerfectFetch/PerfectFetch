//this is where our database info is stored

//we are linking to our .env file, this is a great way to keep your secret information hidden from the public. In this instance, we are hiding our database name and password. Check out the .env file!
require('dotenv').config()

//the connection string below is how we are connection to our database
const { Pool } = require('pg');
const connectionString = process.env.url

const pool = new Pool({
    connectionString: connectionString
})

module.exports = pool;