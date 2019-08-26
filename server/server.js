const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
const routers = require('./routers')
const PORT = 3000;
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('client'))
app.use(cors())

app.use('/db', routers)

app.get('/', (req, res) => {
    // res.send("hello")
    res.sendFile(path.join(__dirname + '../public/index.html'))
})

app.get('/test', (req, res) => {
    res.send('check this out')
})

app.get('/signup', (req,res) => {
    res.render('/client/signup', {error: null})
})

app.listen(PORT, () => {
    console.log("server is listening on port " + PORT);
})