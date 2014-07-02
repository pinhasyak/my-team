/**
 * Created by pi on 5/28/14.
 */
var mongoose = require('mongoose')
    , BaseSchema = require('./baseSchema');

var UserSchema = new BaseSchema({
    name:{type: String, required:'{PATH} is required'}
    , email:{type: String,required:'{PATH} is required', unique: true}
    , password:{type: String,required:'{PATH} is required'}
    , salt:{type: String}
    , firstName:{type: String, default: ''}
    , lastName:{type: String, default: ''}
    , roles: {type:[String]}
});
UserSchema.methods = {
    authenticate:function(passwordToMatch){

    }
}
var UserModel = mongoose.model('UserModel', UserSchema);

module.exports = UserModel;