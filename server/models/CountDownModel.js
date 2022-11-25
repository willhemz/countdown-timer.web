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
	days:{
        type: Number,
        required: true
    },
    hours:{
        type: Number,
        required: true,
    },
    minutes:{
        type: Number,
        required: true,
    }, 
    eventDate: {
        type: String,
        required: true
    }
}, {timestamps: true });



const CountDown = mongoose.model('CountDown', countDownSchema);
module.exports = CountDown;


