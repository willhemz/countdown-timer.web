const express = require('express')
const CountDown = require('../models/CountDownModel.js');
const { addCountdown, viewCountdown, welcome } = require('../controllers/CountDownController')
// const Countdown = require('countdown-js')


const router = express.Router()

router.get('/', welcome);
router.post("/add", addCountdown);
router.get("/:title", viewCountdown);

router.post('/test', async(req, res) => {
    
    res.send('I am Testing')
})

router.get('/add/timer', async(req, res) => {
    const today = 'Nov 30, 2022 11:59:00'
    // var countDownDate = new Date("Nov 30, 2022 11:59:00").getTime()
    var countDownDate = new Date(today).getTime()
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now

        var days = Math.floor(distance / (1000 * 60 * 60 * 24))
        var hours = Math.floor(distance % (1000 * 60 * 60 * 24)/ (1000 * 60 * 60))
        var minutes = Math.floor(distance % (1000 * 60 * 60 ) / (1000 * 60))
        var seconds = Math.floor(distance % (1000 * 60) / 1000)

    console.log(days)
    console.log(hours)
    console.log(minutes)
    console.log(seconds)

    }, 1000,)

})
// setup end datetime for timer

 


module.exports = router

// var ten_days = 1000 * 60 * 60 * 24 * 10
// var end = new Date(new Date().getTime() + ten_days)

// var timer = Countdown.timer(end, function(timeLeft) {
//     console.log(timeLeft)
//     console.log(timeLeft.days)
//     console.log(timeLeft.hours)
//     console.log(timeLeft.minutes)
//     console.log(timeLeft.seconds)
//   }, function() {
//     console.log("Countdown Finished!")
//   })