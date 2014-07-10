// app/models/group5SpecificData.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Group5Schema   = new Schema({
	name: String
});

module.exports = mongoose.model('Group5SpecificData', Group5Schema);