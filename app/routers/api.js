/**
 * Created by pi on 5/16/14.
 */
var express = require('express')
    ,UserModel = require('../models/user')
    ,CompanyModel = require('../models/company')
    ,ProjectModel = require('../models/project')
    ,TeamModel = require('../models/team')


// ROUTES FOR OUR API
// ====================================================

// get an instance of express router
var router = express.Router();

// middleware to use for all requests
router.use(function(req,res,next){
//   do liogging
    console.log('request: '+req.method);
    next(); // make sure we go to next routers and don't stot here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/',function(req,res){
    res.json({message: 'hooray! welcome to our api'});
});


// more routers for our API will happen here
// on routers that end in /user
// ---------------------------------------------------------
router.route('/users')
    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req,res){
        var user = new UserModel({
            firstName: req.body.firstName
            , lastName: req.body.lastName
            , username: req.body.username
        }); // create a new instance of the User model

        user.save(function(err){
            if(err) res.send(err);
            res.json({message:'user created!',
                parentName: req.body.firstName
               , lastName: req.body.lastName
               , username: req.body.username
            });
        });
    })
    // get all the bears (accessed at GET http://localhost:8080/api/bears
    .get(function(req,res){
        UserModel.find(function(err,users){
            if(err) res.send(err);
            res.json(users);
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