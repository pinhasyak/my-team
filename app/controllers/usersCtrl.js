/**
 * Created by pi on 8/19/14.
 */

var UserModel = require('../models/user')
    ,cripto = require('../models/cripto');

exports.getAllUsers = function(req,res){
    UserModel.find({}).exec(function(err,users){
        if(err) res.send(err);
        res.send(users);
    });
}

exports.getUser = function(req,res){
    console.log(req.params.id);
    UserModel.find( { _id: req.params.id },function(err,user){
        if(err) res.send(err);
        res.json(user);
    })
}

exports.saveUser = function(req,res){
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
}
exports.getCurrentUser = function(req,res,next){
    res.json(req.user);
}