/**
 * Created by pi on 5/16/14.
 */
var express = require('express')
    ,UserModel = require('../models/user')
    ,CompanyModel = require('../models/company')
    ,ProjectModel = require('../models/project')
    ,TeamModel = require('../models/team')
    ,cripto = require('../models/cripto')
    ,passport = require('passport')
    ,auth = require('../../config/auth');


// ROUTES FOR OUR API
// ====================================================

// get an instance of express router
var router = express.Router();

// middleware to use for all requests
router.use(function(req,res,next){
//   do liogging
//    console.log('request: '+req.method);
    next(); // make sure we go to next routers and don't stot here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/',function(req,res){
    res.json({message: 'hooray! welcome to our api'});
});
router.route('/current_user')
    .get(function(req,res,next){
     res.json(req.user);
});
router.route('/login')
    .post(function(req,res,next){
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
    });
router.route('/logout')
    .post(function(req,res,next){
        req.logOut();
        res.end();
})
// more routers for our API will happen here
// on routers that end in /user
// ---------------------------------------------------------
router.route('/users/:id')
    .get(function(req,res){
        console.log(req.params.id);
        UserModel.find( { _id: req.params.id },function(err,user){
            if(err) res.send(err);
            res.json(user);
        })
    });


router.route('/users')
    // create a bear (accessed at POST http://localhost:8080/api/users)
    .post(function(req,res){
        var salt ,hashPassword;
        salt = cripto.createSalt();
        hashPassword = cripto.hashPwd(salt,req.body.password);
        var user = new UserModel({
            name: req.body.name
            , email: req.body.email.toLowerCase()
            , password: hashPassword
            , salt:salt
            , firstName: req.body.firstName
            , lastName: req.body.lastName
            , roles: ['team_leader']

        }); // create a new instance of the User model

        user.save(function(err){
            if(err) res.send(err);
            res.json({message:'user created!',
                name: user.name
            });
        });
    })
    // get all the bears (accessed at GET http://localhost:8080/api/bears
    .get(auth.requiresRole('team_leader'),function(req,res){
        UserModel.find({}).exec(function(err,users){
            if(err) res.send(err);
            res.send(users);
        });
    })

// more routers for our API will happen here
// on routers that end in /teams
// ---------------------------------------------------------
router.route('/teams')
    // create a bear (accessed at POST http://localhost:8080/api/teams)
    .post(function(req,res){
        var companyModel = new CompanyModel({
            name: req.body.name
        });
        var teamModule = new TeamModel({
            name: req.body.name
        }); // create a new instance of the User model

        companyModel.save(function(err){
            if(err) res.send(err);
            res.json({message:'company created!',
                name: companyModel.name
            });
        });
    })
    // get all the bears (accessed at GET http://localhost:8080/api/bears
    .get(function(req,res){
        CompanyModel.find(function(err,companies){
            if(err) res.send(err);
            res.json(companies);
        });
    })


//export router
module.exports = router;