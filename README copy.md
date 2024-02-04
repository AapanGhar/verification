This is a userMicroservice which are responsible to handle all types of user crud operation like worker, renter and business.

How to run this project

=> simple open your terminal
=> run command npm install
=> add all enviroment variable in server.sh file
=> run ./server.sh
=> your project will be started succeccfuly


// when you run this project it will run the server.js file and goes to App.js , route.js, controllers, models and return some response.

// all the constants entry should be write in constants irespective of their .js files
// all the normal javascript helpers function should be written in helpers irespective of theirs .js files
// all configuration shoud be written in config filoderes.
// all the controllers file should be written in controllers files.
// all the business logic shoud be written in models by creating theirs respective .js files
// all routes will be handles by routes
// all middleware functions will be written in middleware in its respective .js files
// all connections uri, axios function, response middleware function should be written in utilities
// all types of schema validation should be written in validation folders
// Dockerfile will be responsible to build the image
// docker-compose file will be responsible to cantainor deployment.


