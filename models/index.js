var Sequelize = require('sequelize');



var db = new Sequelize('postgres://localhost:5432/wikistack',{

});

var Page = db.define('page', {
    title: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT, 
        allowNull: false
    },
    // status: {
    //     type: Sequelize.ENUM('open', 'closed')
    // },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

var User = db.define('user', {
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    email: {
        type: Sequelize.STRING, 
        isEmail: true,
        allowNull: false
    }
});


// db
// 	.sync({ force: true})
// 	.then(function(err){
// 		console.log('it works');
// 	}, function(err){
// 		console.error(err);
// 	});


module.exports = {
	Page:Page,
	User:User
}
