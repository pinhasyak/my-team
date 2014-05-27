/**
 * Created by pi on 5/15/14.
 */

//server.js

//  BASE SETUP
// ===============================================

// call the packages we need
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./app/routers/api')

var app = express();
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser());

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring = process.env.MONGOLAB_URI ||  process.env.MONGOHQ_URL || 'mongodb://localhost/HelloMongoose';
// connect to our database
mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + uristring);
    }
});

// set our port
var port = process.env.PORT || 8080;

// REGISTER OUR ROUTS
// all of our routs will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// ======================================================
app.listen(port);
console.log('Megic happens on port: ' + port);