//add the get, delete, find etc requests to the user table
//to be able to add a new user upon sign up
//to search a user/pass upon login and authenticate?

// const uuidv4 = require('uuidv4');
const userController = {};
const pool = require('./database')
// const bodyParser = require('body-parser')
// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

//signup logic
userController.createUser = (req, res, next) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        console.log("reqBody: ", (req.body))
        return res.status(400).send("some values are missing")
    } else {
        const userQuery = 'INSERT INTO users (name, password, email ) VALUES($1, $2, $3)  RETURNING *';
        const userValues = [
            // uuidv4(),
            req.body.name,
            req.body.email,
            req.body.password
        ]

        pool.query(userQuery, userValues, (err, data) => {
            if (err) console.log(err, "error creating user");
            else { 
                console.log('account successfully created') 
                res.status(200).redirect('/home')
            }
            // pool.end()
           })
    }
    next();
}

// userController.loginUser = (req, res, next) => {

// }

module.exports = userController
//logging in psudeocode
//do a post request to the /login path

//if the username & password inputted on the request body are true..

    //and if the results.length we get from the password passed in is greater than zero??? 

    //..we will connect to our database and pass in our username and password. we should change the state of our user to be logged in and redirect them to the path they're meant to go to when they successfully log in...in this case '/home'

    //if the results.length are less than zerohen we will send an error

    //either way, we'll end the response with the database after the fact

//if the username and password are not correct, then send an error asking for the username and password