/**
 * Created by pi on 6/20/14.
 */

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;
// load up the user model
var User = require('../app/models/user');
var cripto = require('../app/models/cripto')

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user,done){
        if(user){
            done(null,user._id);
        }
    });

    // used to deserialize the user
    passport.deserializeUser(function(id,done){
        User.findOne({_id:id}).exec(function(err,user){
            if(user){
                return done(null,user);
            }else{
                return done(null,false);
            }
        })
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use(new LocalStrategy(
        function(username,password,done){
            console.log('passport.use username ' + username);
            User.findOne({email:username}).exec(function(err,user){
                if(user&&cripto.authenticate(user.salt,password,user.password)){
                    return done(null,user);
                }else{
                    return done(null,false);
                }
            })
        }
    ));

};
