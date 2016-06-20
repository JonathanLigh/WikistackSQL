'use strict';

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
	res.send('this page will display all the wiki pages')
});


router.get('/users', function(req, res, next){
	res.send('display all the users')
});

router.get('/users/:userName', function(req, res, next){
	res.send(req.params.userName, 'is the name page you requested')
})

router.post('/users/', function(req, res, next){
	res.send('this will be how we add pages');
});


router.put('/users/:userName', function(req, res, next){
	res.send('put request for', req.params.userName);
})

router.delete('/users/:userName', function(req, res, next){
	res.send('this is for delete')
})

router.get('/add', function(req, res, next){
	res.render('addpage')
});






module.exports = router;