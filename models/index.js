var Sequelize = require('sequelize');



var db = new Sequelize('postgres://localhost:5432/wikistack',{

});

var Page = db.define('page', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true 
    },
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
    status: {
        type: Sequelize.ENUM('open', 'closed'),
        defaultValue: 'open'
    },
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
Page.belongsTo(User, {as: 'author'});


module.exports = {
	Page:Page,
	User:User
}
