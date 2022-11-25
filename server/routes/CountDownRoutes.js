const express = require('express')
const CountDown = require('../models/CountDownModel.js');
const { addCountdown, viewCountdown, welcome } = require('../controllers/CountDownController')
// const Countdown = require('countdown-js')

const controllers = require('../controllers/CountDownController')


const router = express.Router()

router.get('/', (req, res) => {
    console.log('up amd running')
    res.status(200)
})
router.post('/', controllers.createCountDown)


//Ruq23
router.get('/', welcome);
router.post("/add", addCountdown);
router.get("/:title", viewCountdown);





 


module.exports = router



module.exports = router

