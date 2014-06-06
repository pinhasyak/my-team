/**
 * Created by pi on 5/28/14.
 */
/**
 * Created by pi on 5/28/14.
 */
var mongoose = require('mongoose')
    , BaseSchema = require('./baseSchema');

var ProjectSchema = new BaseSchema({
    name:{type: String, default: ''}
});

module.exports = mongoose.model('ProjectModel',ProjectSchema);