//comments in this file by Irish Dave
//any questions please come find me
//word wrap is your friend (option + Z)

//requiring in pool from our datbase file
const pool = require('./database')
//setting our controller object
const locationController = {}

//our intention with the addInfo method was to add a users email, message, and location to the map dynamically when they clicked a point on the map. This would be able to be viewed by other users who signed in. Something that could be good to implement here would be to have some form of check to see if a message already exists associated with the user, perhaps to prevent duplicate posts by the one user? While we check here if a user has implemented a message, we are not checking if the message is unique.
locationController.addInfo = (req, res, next) => {
  //destructuring
  const { email, message, latitude, longitude } = req.body
  console.log("req.body: ", req.body)
  //if name or email do not exist
  if (!email || !message) {
    //if name or message do not exist, send in an error
    return res.status(400).send("please fill in your information")
  } else {
    //we want to add the values below into our locations table
    const userQuery = 'INSERT INTO locations (message, latitude, longitude, email) VALUES($1, $2, $3, $4) RETURNING *'
    const userValues = [message, latitude, longitude, email]
    //connecting to database and inserting our query into corresponding columns
    pool.query(userQuery, userValues, (err, data) => {
      //if there's an error, send an error
      if (err) res.json("error adding info", err)
      else {
        //logic to update the map should go here. THIS LOGIC CURRENT DOES NOT EXIST.
        console.log('data added: ', data)
      }
    })
  }
  //while there is no other methods being run on this request, we figured the next method is good practice to have regardless 
  next()
}


//our intention with this getAllInfo method, was to send back info to the front end from the locations table. Read on to experience the adventure...
locationController.getAllInfo = (req, res, next) => {
  //this was my first time implementing a JOIN feature on two tables, so I broke it down here line by line so you can follow what's happening with the joinTables variable
  //SELECT: what you want to grab from both tables
  //FROM: the first table you want to grab info from
  //INNER JOIN: the second table you want to grab info from
  //ON: specify the filter you want to use
  //users.email is primary key
  //locations.email is foreign key
  const joinTables = 'SELECT users.name, locations.latitude, locations.longitude, locations.message FROM users INNER JOIN locations ON users.email = locations.email';

  //send a query to our table
  pool.query(joinTables, (err, data) => {
    //if we get an error back...
    if (err) {
      //...send back an error
      res.status(400).send("data not received")
    } else {
      //...send data back to the front end to be rendered
      //THE LOGIC HERE IS NOT COMPLETE
      //our intention here was to send back to the front end: the users name, their current location, and the message they'd placed on the map. Unfortunately we never got this to work dynamically, and instead ended up hard coding within the front end. If you wanted to get this info sent to the front end to render, it could be implemented here. 
      res.status(200).json(data)
    }
  })
  //while there is no other methods being run on this request, we figured the next method is good practice to have regardless
  next();
}


//our intention with this delete info was that users should be able to delete the message they've placed on a map (maybe they solved the problem they were stuck on?)
//we never really got around to implementing this, but started the functionality, so could be something helpful to implement
locationController.deleteInfo = (req, res, next) => {
  const { message, email, latitude, longitude } = req.body
  console.log("req.body: ", req.body)
  if (!message) {
    res.status(400).send("no message!")
  } else {
    const deleteQuery = 'DELETE FROM locations WHERE message=($1) and email=($2) and latitude=($3) and longitude=($4)';
    const deleteValues= [message,email,latitude,longitude]
  }
  next();
}

module.exports = locationController