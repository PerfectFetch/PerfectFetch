//this is where our database info is stored

//we are linking to our .env file, this is a great way to keep your secret information hidden from the public. In this instance, we are hiding our database name and password. Check out the .env file!
//!we installed dotenv
require('dotenv').config()

//client runs one query, then closes the connection. this process can take time! with lots of request, increases the latency of your code
//with pool, your connection is PERSISTENT. your connection with the database and the server is always open. 
const { Pool, Client } = require('pg');
//the connection string below is how we are connection to our database
const connectionString = process.env.url

const pool = new Pool({
    connectionString: connectionString
})

module.exports = pool;