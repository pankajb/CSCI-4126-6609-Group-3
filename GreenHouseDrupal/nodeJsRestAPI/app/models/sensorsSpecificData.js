// app/models/sensorsSpecificData.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SensorsSchema   = new Schema({
	name: String
});

module.exports = mongoose.model('sensorsSpecificData', SensorsSchema);