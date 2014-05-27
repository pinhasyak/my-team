/**
 * Created by pi on 5/15/14.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
   name: String
});

module.exports = mongoose.model('Bear', BearSchema);