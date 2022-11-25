const CountDown = require('../models/CountDownModel.js');



module.exports.welcome = (req, res) => {
    console.log('up amd running')
    res.status(200).json('Welcome to CountDown')
}

module.exports.addCountdown = async(req, res) => {
    const { title, description, days, hours, minutes, eventDate } = req.body
    const countdown = new CountDown({ title, description, days, hours, minutes, eventDate })
    await countdown.save()
    console.log('Successfully Added CountDown')
    console.log(countdown)
    res.status(201).json({
        msg: `You have successfully added a countdown for ${title}, ${description} in ${days} days, ${hours} hours, ${minutes} minutes`,
      });
}

module.exports.viewCountdown = async(req, res) => {
    title = req.params.title
    const countdown = await CountDown.findOne({title: title})
    if(countdown.length === 0){
        console.log('Countdown does not exist!')
        res.status(201).json('Countdown does not exist!')

    }else {
        var countDownDate = new Date(countdown.eventDate).getTime()
        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now
    
            var days = Math.floor(distance / (1000 * 60 * 60 * 24))
            var hours = Math.floor(distance % (1000 * 60 * 60 * 24)/ (1000 * 60 * 60))
            var minutes = Math.floor(distance % (1000 * 60 * 60 ) / (1000 * 60))
            var seconds = Math.floor(distance % (1000 * 60) / 1000)

            
        console.log(countdown)
        console.log(days)
        console.log(hours)
        console.log(minutes)
        console.log(seconds)

        res.status(201).json(`Your event ${countdown.title}, which is for ${countdown.description} is due in ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`)
    
        }, 1000,)
}
}