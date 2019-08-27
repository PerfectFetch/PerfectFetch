# PerfectFetch
Our application is designed to tackle the problem of finding pair programming partners in the wild. We have a signup/login page, after which users are redirected to a map which autopopulates an area around their current location. Users can then add themselves to the map, with a message about their tech stack/what they would like to work on. 



//////////////////////////////////////
backend - Irish Dave & Olga. 
here we'll list the purpose of each file. Side note! We used elephantsql, would recommend again. Details for our account are in our .env file, more info on which can be found in database.js login info upon request :)

we have a server folder that contains most of our files. 

-server.js handles our initial routes, of which /db links to our routers file. this was done to modularise our code, but is this necessary? would appreciate thoughts and feedback on best practices!
-database.js contains info pertaining to our database and links to our .env file
-routers.js handles our requests from the front end that come through /db, and passes the requests to our controller files
-userController.js handles when a user wants to sign up and login, all of which is added to the users table in our database and passwords hashed at each instance
-locationController.js handles getting info from a user when they add their location to the map, which is added to the location table. In seperate functionality, getAllInfo bundles some info from both tables in our database, to send back a nice object to the front end which can then be displayed upon other users signing in. We also started adding a delete method so users can remove themselves off the map.
//////////////////////////////////////



