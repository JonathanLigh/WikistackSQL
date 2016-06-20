'use strict';
var express = require('express');
var app = new express();
var routes = require('./routes');
var morgan = require('morgan');
var swig = require('swig');

app.engine('html', swig.renderFile);
app.use(morgan('dev'));

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(routes);


var server = app.listen(3000, function(){
	console.log('listening on port 3000')
});