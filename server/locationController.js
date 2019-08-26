const pool = require('./database')
const locationController = {}

//TODO we could check in the addInfo message if the same message already exists, this could prevent users from writing the same message multiple times in a location

//adds their name / about
locationController.addInfo = (req, res, next) => {
  //good to have email as foreign key as it is unique
  const {
    email,
    message,
    latitude,
    longitude
  } = req.body
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
        //!if no error, do we need to update the map here?
        console.log('data added: ', data)
      }
    })
  }
  next()
}


locationController.getAllInfo = (req, res, next) => {
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
      //!have some way to send this data back to the front end to render
      res.status(200).json(data)
    }
  })
  next();
}


//!add delete functionality?
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