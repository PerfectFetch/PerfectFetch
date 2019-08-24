const express = require('express')
const app = express();
const PORT = 3000;
const db = require('./database.js')
const bodyParser = require('body-parser')
const fs = require('fs');
const path = require('path')
const userController = require('./userController.js')
const routers = require('./routers')
// const cors = require('cors');

// app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('client'))


app.use('/db', routers)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/signup', (req,res) => {
    res.render('/client/signup', {error: null})
})

app.listen(PORT, () => {
    console.log("server is listening on port " + PORT);
})