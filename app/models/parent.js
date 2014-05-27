/**
 * Created by pi on 5/18/14.
 */
var mongoose = require('mongoose')
    , Child = require('./child')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId
    , ChildSchema = require('mongoose').model('Child').schema;

var ParentSchema = new Schema({
    name: {type: String, default: 'songname'}
    , birthday: {type: Date, default: Date.now()}
    , childes: [ChildSchema]
});

module.exports = mongoose.model('Parent', ParentSchema);

