// app/models/group3SpecificData.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Group3Schema   = new Schema({
	name: String
});

module.exports = mongoose.model('Group3SpecificData', Group3Schema);