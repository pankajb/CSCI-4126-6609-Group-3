// app/models/warningSpecificData.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var WarningSchema   = new Schema({
	name: String
});

module.exports = mongoose.model('warningSpecificData', WarningSchema);