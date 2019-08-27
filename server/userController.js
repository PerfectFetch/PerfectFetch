//comments in this file by Irish Dave
//any questions please come find me
//word wrap is your friend (option + Z)

//requiring in pool from our datbase file
const pool = require('./database')
//setting our controller object
const userController = {};
//we use bcrypt here for hashing passwords. good docs on their npm page https://www.npmjs.com/package/bcrypt
const bcrypt = require('bcrypt')

//our intention with this method is to enable a user to sign up. after which, their info will be stored in our users table and their passwords will be hashed for security purposes
userController.createUser = (req, res, next) => {
  //destructuring
  const { name, email, password } = req.body
  //if one of the required values don't exist..
  if (!name || !email || !password) {
    //send a 400 error
    return res.status(400).send("some values are missing")
  } else {
    //hash the password using bcrypt
    //check out this function on bcrypt npm page
    bcrypt.hash(password, 10).then(function (hash) {

        //query that will add values into our database
        const userQuery = 'INSERT INTO users (name, email, password ) VALUES($1, $2, $3)  RETURNING *';
        //actual values to be added into users table. NOTE that we pass the hashed version of our password into the query, as opposed to the actual password
        const userValues = [
          name,
          email,
          hash
        ]

        //query the above data
        pool.query(userQuery, userValues, (err, data) => {
          //if we hit an error, display the error
          if (err) {
            res.status(400).send("invalid user info")
          } else {
            //if the data comes back as true, we will send an object back to the front end. if this object gets received by the front end, state gets updated and the user is allowed sign in AKA redirected to /signin page via React Router
            console.log('account successfully created')
            if (data === true)
            return res.status(200).send({isSignedUp: true})
          }
        })
      })
      //catch incase there's an error when entering password into bcrypt, such as the value entered into bcrypt function doesn't exist e.g. you entered psswrd instead of password
      .catch((err) => {
        console.log("error during bcrypt", err);
        res.status(500).send(err);
      });
  }
  //while there is no other methods being run on this request, we figured the next method is good practice to have regardless
  next();
}

//our intention with this method is to enable a user to login. their info will be checked against the info stored in the users table, and if it's correct, the user will be allowed to log in, and redirected to the map page
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
            if (result === true) {
              //if the data comes back as true, we will send an object back to the front end. if this object gets received by the front end, state gets updated and the user is allowed log in AKA redirected to /login page via React Router
              return res.status(200).send({isLoggedIn: true})
            } else {
              //...if not, send an error
              res.status(400).send('Invalid password, try again!')
            }
          })
        }
      })
    }
    //while there is no other methods being run on this request, we figured the next method is good practice to have regardless
    next();
  }
module.exports = userController