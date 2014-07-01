/**
 * Created by pi on 6/2/14.
 */


var express = require('express')




// ROUTES FOR OUR API
// ====================================================

// get an instance of express router
var router = express.Router();

// middleware to use for all requests
router.use(function(req,res,next){
//   do liogging
    console.log(req.user);
    next(); // make sure we go to next routers and don't stot here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('*',function(req,res){
    res.sendfile('./public/index.html',{
        bootstrappedUser: req.user
    });
});

module.exports = router;