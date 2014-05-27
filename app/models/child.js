/**
 * Created by pi on 5/18/14.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var ChildSchema = new Schema({
    name: {type: String, default: 'Moshe'},
    birthday: {type: Date ,default: Date.now()}
});
module.exports = mongoose.model('Child',ChildSchema);