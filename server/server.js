const express = require('express')
const app = express();
const PORT = 3000;
const db = require('./database.js')


app.listen(PORT, () => {
    console.log("server is listening on port " + PORT);
})