var express = require('express'),
  app = express(),
  port = process.env.PORT || 9000;
  mongoose = require('mongoose'),
  Task = require('./src/api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://OttoVBismarck:Leki1234@ds157818.mlab.com:57818/chatroom');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('/.src/api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
