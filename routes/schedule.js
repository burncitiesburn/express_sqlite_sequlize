var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.Schedule.create({
    team_home: req.body.team_home,
    team_away: req.body.team_away,
    event_date: req.body.event_date
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:schedule_id/destroy', function(req, res) {
  models.Schedule.destroy({
    where: {
      id: req.params.schedule_id
    }
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;