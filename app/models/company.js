/**
 * Created by pi on 5/28/14.
 */
var mongoose = require('mongoose')
    , BaseSchema = require('./baseSchema')
    , Schema = mongoose.Schema;

var CompanySchema = new BaseSchema({
    name:{type: String, default: ''}
});

module.exports = mongoose.model('CompanyModel', CompanySchema);