const CountDown = require('../models/CountDownModel.js');



module.exports.welcome = (req, res) => {
    console.log('up amd running')
    res.status(200).json('Welcome to CountDown')
}

module.exports.addCountdown = async(req, res) => {
    const { title, description, days, hours, minutes } = req.body
    const countdown = new CountDown({ title, description, days, hours, minutes })
    await countdown.save()
    console.log('Successfully Added CountDown')
    res.status(201).json({
        msg: `You have successfully added a countdown for ${title}, ${description} in ${days} days, ${hours} hours, ${minutes} minutes`,
      });
}

module.exports.viewCountdown = async(req, res) => {
    title = req.params.title
    const countdown = await CountDown.find({title: title})
    if(countdown.length === 0){
        console.log('Countdown does not exist!')
        res.status(201).json('Countdown does not exist!')

    }else {
    console.log(countdown)
    res.status(201).json({countdown});
}
}