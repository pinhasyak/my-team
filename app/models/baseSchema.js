/**
 * Created by pi on 5/28/14.
 */

var mongoose = require('mongoose')
    , util = require('util')
    , Schema = mongoose.Schema;

function BaseSchema() {
    Schema.apply(this, arguments);

    this.add({
        created: { type: Date, default: Date.now }
        ,updated: { type: Date, default: Date.now }
        ,deleted: { type: Boolean, default: false }
    });
}
util.inherits(BaseSchema, Schema);

module.exports = BaseSchema;