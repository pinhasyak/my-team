/**
 * Created by pi on 5/28/14.
 */
var mongoose = require('mongoose')
    , BaseSchema = require('./baseSchema');

var UserSchema = new BaseSchema({
    name:{type: String, default: ''}
    , email:{type: String,default: ''}
    , password:{type: String}
    , salt:{type: String}
    , firstName:{type: String, default: ''}
    , lastName:{type: String, default: ''}
});
UserSchema.methods = {
    authenticate:function(passwordToMatch){

    }
}
var UserModel = mongoose.model('UserModel', UserSchema);

module.exports = UserModel;