/**
 * Created by pi on 5/16/14.
 */
var express = require('express');
var Bear = require('../models/bear');
var Parent = require('../models/parent')
var Child = require('../models/child')
// ROUTES FOR OUR API
// ====================================================

// get an instance of express router
var router = express.Router();

// middleware to use for all requests
router.use(function(req,res,next){
//   do liogging
    console.log('Something is happening.');
    next(); // make sure we go to next routers and don't stot here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/',function(req,res){
    res.json({message: 'hooray! welcome to our api'});
});

// more routers for our API will happen here
// on routers that end in /bears
// ---------------------------------------------------------
router.route('/bears')
    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req,res){
        var bear = new Bear(); // create a new instance of the Bear model
        bear.name = req.body.name; // set the bear name (come from the request)
        // save the bear and check for errors
        bear.save(function(err){
            if(err) res.send(err);
            res.json({message:'Bear created!',
                bearName: req.body.name });
        });
    })
    // get all the bears (accessed at GET http://localhost:8080/api/bears
    .get(function(req,res){
        Bear.find(function(err,bears){
            if(err) res.send(err);
            res.json(bears);
        });
    })

// on routers that in /bears/:bear_id
// ------------------------------------------------------------
router.route('/bears/:bear_id')
    // ger the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req,res){
        Bear.findById(req.params.bear_id,function(err, bear){
            if(err) res.send(err);
            res.json(bear);
        });
    })
    // update the bear with that id (accessed at PUT v
    .put(function(req,res){
        Bear.findById(req.params.bear_id,function(err, bear){
            if(err) res.send(err);
            bear.name = req.body.name;
            bear.save(function(err){
                if(err) res.send(err);
                res.json({message: 'Bear updated', bearData: bear})
            });
        })
    })
    // delete the bear with this id (accessed at DELETE   http://localhost:8080/api/bears/:bear_id)
    .delete(function(req,res){
        Bear.remove({_id: req.params.bear_id},function(err){
            if(err) res.send(err);
            res.json({message: 'Successfully deleted'});
        }) ;
    });


// more routers for our API will happen here
// on routers that end in /parent
// ---------------------------------------------------------
router.route('/parent')
    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req,res){
        var parent = new Parent({
            name: req.body.name
            , childes:[{
                name: req.body.child_name1
            },{
                name: req.body.child_name2
            }]
        }); // create a new instance of the Bear model

        parent.save(function(err){
            if(err) res.send(err);
            res.json({message:'parent created!',
                parentName: req.body.name });
        });
    })
    // get all the bears (accessed at GET http://localhost:8080/api/bears
    .get(function(req,res){
        Parent.find(function(err,parents){
            if(err) res.send(err);
            res.json(parents);
        });
    })


//export router
module.exports = router;