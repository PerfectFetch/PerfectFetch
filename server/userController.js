const userController = {};
const pool = require('./database')
const bcrypt = require('bcrypt')

//signup logic
userController.createUser = (req, res, next) => {
  //destructuring
  const {
    name,
    email,
    password
  } = req.body
  //if one of the required values don't exist..
  if (!name || !email || !password) {
    //send a 400 error
    return res.status(400).send("some values are missing")
  } else {
    //hash the password using bcrypt
    bcrypt.hash(password, 10).then(function (hash) {

        //query that will add values into our database
        const userQuery = 'INSERT INTO users (name, email, password ) VALUES($1, $2, $3)  RETURNING *';
        //actual values to be added into database
        const userValues = [
          req.body.name,
          req.body.email,
          hash
        ]

        //query the above data
        pool.query(userQuery, userValues, (err, data) => {
          //if we hit an error, display the error
          if (err) {
            console.log(err, "error creating user");
            res.status(400).send("invalid user info")
          } else {
            //if not, redirect the user to the home page
            console.log('account successfully created')
            if (data === true)
            return res.status(200).send({isSignedUp: true})
          }
          // pool.end()
        })
      })
      .catch((err) => {
        console.log("error during bcrypt", err);
        res.status(500).send(err);
      });
  }
  next();
}


userController.loginUser = (req, res, next) => {
    //destructuring
    // console.log("req.body: ", req.body)
    const { email, password } = req.body
    //if no email or password are inputted
    if (!email || !password) {
      //return an error
      return res.status(400).send("Some input is missing")
    } else {
      //grab emails from users table
      const reqQuery = 'SELECT * FROM users WHERE email = $1';
      //select the user where the email matches
      pool.query(reqQuery, [email], (err, data) => {
        //if we get an error loggin in...
        // console.log('reqquery:', reqQuery);
        if (err) {
          //...send an error
          return res.status(400).send("unable to verify credentials")
        }
        //destructure rows
        const { rows } = data;
        // console.log("rows: ", rows)
        //if our rows array does not exist. on the data we get back..
        if (!rows[0]) {
          //...email does not exist in the database, try log in again!
          return res.status(400).send("invalid email please try again")
        }
        //if our rows array contains a password property that matches our inputted password...
        else {
          //...store the hashed password that's already in the database
          let hash = rows[0].password;
          //compare the password we want to log in with with the hashed password
          bcrypt.compare(password, hash, (err, result) => {
            //if the passwords match...
            console.log("before data is true")
            if (result === true) {
              //...let user login
              console.log("data is true!")
              // res.end("test")
              return res.status(200).send({isLoggedIn: true})
          
            } else {
              //...if not, send an error
              res.status(400).send('Invalid password, try again!')
            }
          })
        }
      })
    }
    // next();
  }
module.exports = userController