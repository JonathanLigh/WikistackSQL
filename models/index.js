var Sequelize = require('sequelize');



var db = new Sequelize('postgres://localhost:5432/wikistack');


var pageObj = {
	title: Sequelize.STRING,
	urlTitle: Sequelize.STRING,
	content: Sequelize.TEXT,
	date: Sequelize.DATE,
	status: Sequelize.BOOLEAN
};

var userObj = {
	username: Sequelize.STRING
	email: Sequelize.String,
};



var Page = db.define('Page', pageObj);
var User = db.define('User', userObj);
User.hook

db
	.sync({ force: true})
	.the(function(err){
		console.log('it works');
	}, function(err){
		console.error(err);
	});

