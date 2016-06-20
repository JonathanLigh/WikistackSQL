'use strict';
var express = require('express');
var app = new express();
var routes = require('./routes');
var morgan = require('morgan');
var swig = require('swig');
var models = require('./models')
var bodyParser = require('body-parser');




//uses morgan to log all requests
app.use(morgan('dev'));
//setting up the swig template
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests


//get routes
app.use('/wiki/', routes);

//syncing the User
models.User.sync({})
.then(function () {
    return models.Page.sync({})
})
.then(function () {
    server.listen(3001, function () {
        console.log('Server is listening on port 3001!');
    });
})
.catch(console.error);




var server = app.listen(3000, function(){
	console.log('listening on port 3000')
});