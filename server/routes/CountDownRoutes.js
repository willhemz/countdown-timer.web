const express = require('express')
const CountDown = require('../models/CountDownModel.js');



const controllers = require('../controllers/CountDownController')


const router = express.Router()


router.get('/', controllers.welcome);
router.post("/add", controllers.createCountDown);
router.get("/:title", controllers.viewCountdown);





 


module.exports = router



module.exports = router

