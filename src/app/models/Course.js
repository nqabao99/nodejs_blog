const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
	name: { type: String, maxlength: 255 },
	description: { type: String, maxlength: 600 },
	image: { type: String, maxlength: 255 },
	createAT: { type: Date, default: Date.now },
	updateAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
