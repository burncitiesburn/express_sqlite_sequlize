var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
	var a = models.User.findAll({});
	var b = a.then(function(aResult){

		return models.Schedule.findAll({})
	})
	b.then(function(bResult){
		var schedules = bResult;
		var users = a.value();
		console.log(users)
		res.render('index', {
	    title: 'Sequelize: Express Example',
	    users: users,
	    schedules: schedules
	});
	});
	
});

module.exports = router;