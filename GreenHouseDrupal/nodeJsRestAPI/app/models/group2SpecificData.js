// app/models/group2SpecificData.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Group2Schema   = new Schema({
	name: String
});

module.exports = mongoose.model('Group2SpecificData', Group2Schema);