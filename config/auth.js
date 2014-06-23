/**
 * Created by pi on 6/21/14.
 */

var passport = require('passport');

exports.authenticate = function(req,res,next){
    var auth = passport.authenticate('local',function(error,user){
        if(error){console.log('login error '+ error)}
        if(!user){
            console.log('not find user: '+req.body.username);
            res.send({success:false});
        }
        req.logIn(user,function(err){
            if(err){return next(err)}
            res.send({success:true,user:user})
        })
    });
    auth(req,res,next);
}