const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const countDownSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true,
	},
	expireAt:{
        type: Date,
        expires: '1d',
        required:true
    }
}, {timestamps: true });



const CountDown = mongoose.model('CountDown', countDownSchema);
module.exports = CountDown;


