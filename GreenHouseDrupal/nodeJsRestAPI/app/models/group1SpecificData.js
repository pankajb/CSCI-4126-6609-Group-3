// app/models/group1SpecificData.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Group1Schema   = new Schema({
	name: String
});

module.exports = mongoose.model('Group1SpecificData', Group1Schema);