const mongoose = require('mongoose');
const pagination = require('mongoose-paginate');

var schema = mongoose.Schema({
    name: { type: String },
    description: { type: String, default: "sin descripcion" },
    nodes: Array,
    edges: Array,
    currentState: { type: String }
});

schema.plugin(pagination);

var Machine = mongoose.model('machine', schema);

module.exports = Machine;
