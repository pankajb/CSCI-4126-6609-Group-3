// app/models/environmentSpecificData.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EnvironmentSchema   = new Schema({
	name: String
});

module.exports = mongoose.model('environmentSpecificData', EnvironmentSchema);