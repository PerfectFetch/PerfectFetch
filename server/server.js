const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const routers = require('./routers')
const PORT = 3000;
const cors = require('cors')
const path = require('path')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/db', routers)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../public/index.html'))
})
// app.get('/signup', (req,res) => {
//     res.render('/client/signup', {error: null})
// })

app.listen(PORT, () => {
    console.log("server is listening on port " + PORT);
})