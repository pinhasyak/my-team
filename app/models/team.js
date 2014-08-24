/**
 * Created by pi on 5/28/14.
 */
var mongoose = require('mongoose')
    , BaseSchema = require('./baseSchema')
    , UserSchema = mongoose.model('UserModel').schema
    , CompanySchema = mongoose.model('CompanyModel').schema
//    , ProjectSchema = mongoose.model('ProjectModel').schema;

var TeamSchema = new BaseSchema({
    name :{type: String, default: ''}
    , teamLeader: [UserSchema]
    , members: [UserSchema]
    , company: [CompanySchema]
//    , projects: [ProjectSchema]
});

module.exports = mongoose.model('TeamDto',TeamSchema);