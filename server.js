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
var morgan = require('morgan');

var apiRouter = require('./app/routers/api');
var clientRouter = require('./app/routers/client');
// config files
var db = require('./config/db');

var app = express();
app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser()); 						// pull information from html in POST



// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring = process.env.MONGOLAB_URI ||  process.env.MONGOHQ_URL || db.url;
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
app.use('/api', apiRouter);
app.use('*', clientRouter);
// START THE SERVER
// ======================================================
app.listen(port);
console.log('Megic happens on port: ' + port);