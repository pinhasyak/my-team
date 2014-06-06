/**
 * Created by pi on 5/28/14.
 */
var mongoose = require('mongoose')
    , BaseSchema = require('./baseSchema');

var UserSchema = new BaseSchema({
    firstName:{type: String, default: ''}
    ,lastName:{type: String, default: ''}
    ,username:{type: String, default: ''}
    ,password:{type: String, default: ''}
    ,profilePhotoImported:{type: Boolean,default: false}
});

module.exports = mongoose.model('UserModel', UserSchema);