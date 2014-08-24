/**
 * Created by pi on 8/11/14.
 */
//var TeamDao = require('mongoose').model('TeamBo');
var Team = require('../models/teamDao');

exports.getTeams = function(req,res){
    Team.createDefaultTeams();
    Team.TeamDao.find({}).exec(function(err,collection){
        res.json(collection);
    })
}
exports.getTeamById = function(req, res){
    Team.TeamDao.findOne({_id:req.params.id}).exec(function(err, team){
        res.send(team);
    })
}