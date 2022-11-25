const CountDowns = require("../models/CountDownModel");


/**
 * @desc Create CountDown
 * @route POST
 * @route /api/v1/countdown
 * @access Public
 */

const createCountDown = async (req, res) => {
    try {

        const { title, description, minutes, days, hours } = req.body;

        const countDownExist = await CountDowns.findOne({ title })

        if(countDownExist){
            return res.status(406).json({
                success: false,
                message: `Not Acceptable!! ${title} already exist `
            })
        } else {
            const countDown = await CountDowns.create({
                title: title,
                minutes: minutes,
                days: days,
                description: description,
                hours: hours,
              });
            const createdCountDown = await countDown.save();
            return res.status(201).json({
                success: true,
                message: createdCountDown
            })   
        }

    } catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
};




module.exports = {
  createCountDown
};
