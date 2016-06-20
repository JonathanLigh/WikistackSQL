'use strict';

var express = require('express');
var router = express.Router();


router.get d('/', function(req,res){
	res.send('this is the home page');
})

module.exports = router;