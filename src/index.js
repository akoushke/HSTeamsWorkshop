'use strict';
// Third part Dependencies/Libraries
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Local Libraries
var constants = require('./constants');

// Routers
var webhooks = require('./routers/webhooks');

// Express Initiation 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Pragma");
  response.header("Access-Control-Allow-Methods", "GET, POST");
  response.header("Access-Control-Allow-Origin", "*");

  next();
});

app.use('/webhooks', webhooks.router);


app.get('/', function(request, response) {
  response.send('Hello World!')
});


app.get('/emojis', function(request, response) {
  response.send('👋 🌎 !')
});

app.get('/people/me', function(request, response) {
  constants.
  webexAxiosInstance
  .get('/people/me')
  .then(function(res) {
    response.send(res.data);
  })
  .catch(function(error) {
    response.send(error.message);
  })
});

app.get('/people/:id', function(request, response) {
  const id = request.params['id'];

  constants.
  webexAxiosInstance
  .get(`/people/${id}`)
  .then(function(res) {
    response.send(res.data);
  })
  .catch(function(error) {
    response.send(error.message);
  })
})

/**
 * Express keeps listening to this given port
 *
 * @param {number} PORT        Port which your application listens to
 * @param {function} callback  Callback function to inform the developer that
 *                             the application is running on a given port.
 */
app.listen(constants.PORT, function () {
  console.info(`port ${constants.PORT} is running!`);
});
