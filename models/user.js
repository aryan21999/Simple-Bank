var mongoose = require('mongoose');

// User Schema
var userSchema = mongoose.Schema({
	name:{
		type: String,
		required: true,
		unique: true
	},
	card:{
		type: String,
		required: true,
		unique: true
	},
	email:{
		type: String,
		required: true,
		unique: true
	},
	password:{
		type: String,
		required: true
	},
	money:{
		type: Number,
		required: true,
		default: 0
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});



var User = module.exports = mongoose.model('User', userSchema);
