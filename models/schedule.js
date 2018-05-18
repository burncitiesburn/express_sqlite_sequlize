'use strict';
module.exports = (sequelize, DataTypes) => {
  var Schedule = sequelize.define('Schedule', {
    team_home: DataTypes.STRING,
    team_away: DataTypes.STRING,
    event_date: DataTypes.DATE
  }, {});
  Schedule.associate = function(models) {
    // associations can be defined here
  };
  return Schedule;
};