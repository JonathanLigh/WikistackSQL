'use strict';

var express = require('express');
var router = express.Router();
var pg = require('pg');
var models = require('../models');
var Page = models.Page; 
var User = models.User; 
// var conString = 'postgres://localhost:5432/wikistack';
// var client = new pg.Client(conString);
// client.connect();

function generateUrlTitle (title) {
  if (title) {
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
  } else {
    return Math.random().toString(36).substring(2, 7);
  }
}

router.get('/', function(req, res, next){
	Page.findAll({
		attributes: ['title']
	}).then(function(contents){
		res.json(contents);
	}).catch(next);
});

router.get('/users', function(req, res, next){
	res.send('display all the users')
});

router.get('/users/:userName', function(req, res, next){
	res.send(req.params.userName, 'is the name page you requested')
})

router.post('/users/', function(req, res, next){
	User.findOrCreate({
	where: {
		name: req.body.name,
		email: req.body.email
	}
})
.then(function(values){
	var user = values[0];
	var page = Page.build({
		title: req.body.title,
		content: req.body.content
	});

	return page.save().then(function(page){
		return page.setAuthor(user);
	});
})
.then(function(page){
	res.redirect(page.route);
})
.catch(next);
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

router.post('/', function(req, res, next) {
	var article = req.body.Content;
	var title = req.body.title;
	User.findOrCreate({
	where: {
		name: req.body.name,
		email: req.body.email
	}
})
.then(function(values){
	var user = values[0];
	var page = Page.build({
		title: req.body.title,
		content: req.body.content
	});

	return page.save().then(function(page){
		return page.setAuthor(user);
	});
})
.then(function(values){
	var user = values[0];
	var page = Page.build({
    title: title,
    content: article,
    urlTitle: generateUrlTitle(title)
  })});
page.save()
  .then(function(savedPage){
  res.redirect(savedPage.route); // route virtual FTW
})
 .catch(next);
  res.json(page);
});

router.get('/:urlTitle', function(req, res, next){
	Page.findAll({
		attributes: ['title', 'content'],
		where:{
			urlTitle: req.params.urlTitle
		},
	}).then(function(info){
		console.log(info, '--------------');
		console.log('============', res.json(info));
		res.json(info)

	})
	.catch(next);

})








module.exports = router;