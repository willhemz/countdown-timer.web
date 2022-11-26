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


const welcome = (req, res) => {
    res.status(200).json('Welcome to CountDown')
}

/**
 * @desc view a countdown
 * @route GET
 * @route /api/v1/countdown/title
 * @access Public
 */

const viewCountdown = async (req, res) => {
    title = req.params.title
    const countdown = await CountDowns.findOne({title: title})
    if(!countdown){
        return res.status(404).json({
            success: false,
            message: "Countdown does not exist"
        })

    }else {
        var countDownDate = new Date(Date.parse(countdown.createdAt))
            var now = new Date().getTime();
            var delta = Math.abs(countDownDate - now) / 1000;
            var time = (countdown.days * 1440*60) + (countdown.hours * 60 * 60) + (countdown.minutes * 60)
            delta = time - delta
   
            var days = Math.floor(delta / 86400);
            delta -= days * 86400;

            var hours = Math.floor(delta / 3600) % 24;
            delta -= hours * 3600;

            var minutes = Math.floor(delta / 60) % 60;
            delta -= minutes * 60;

            var seconds = delta % 60;  


        return res.status(200).json(
            {
             title: countdown.title,
             description: countdown.description,
             days: days,
             minutes: minutes,
             hours: hours
            }
        )
}
}



module.exports = {
  createCountDown,
  viewCountdown,
  welcome
};
