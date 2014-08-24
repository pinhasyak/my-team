/**
 * Created by pi on 5/16/14.
 */
var express = require('express')
    ,auth = require('../../config/auth')
    ,teamsCtrl = require('../controllers/teamsCtrl')
    ,passportAuthenticationCtrl = require('../controllers/passportAuthenticationCtrl')
    ,usersCtrl = require('../controllers/usersCtrl')
    ,postsCtrl = require('../controllers/postsCtrl');


// ROUTES FOR OUR API
// ====================================================

// get an instance of express router
var router = express.Router();

// middleware to use for all requests
router.use(function(req,res,next){
//    console.log('request: '+req.method);
    next(); // make sure we go to next routers and don't stot here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/',function(req,res){
    res.json({message: 'hooray! welcome to our api'});
});

router.route('/show_teams')
    .get(teamsCtrl.getTeams);
router.route('/show_teams/:id')
    .get(teamsCtrl.getTeamById);

router.route('/current_user')
    .get(usersCtrl.getCurrentUser);

router.route('/login')
    .post(passportAuthenticationCtrl.login);

router.route('/logout')
    .post(passportAuthenticationCtrl.logout);

router.route('/users/:id')
    .get(usersCtrl.getUser);

router.route('/users')
    .post(usersCtrl.saveUser)
    .get(auth.requiresRole('team_leader'),usersCtrl.getAllUsers)

router.route('/posts')
    .get(postsCtrl.getPosts);

//export router
module.exports = router;