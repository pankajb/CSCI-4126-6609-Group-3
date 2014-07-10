// app/models/group4SpecificData.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Group4Schema   = new Schema({
	name: String
});

module.exports = mongoose.model('Group4SpecificData', Group4Schema);