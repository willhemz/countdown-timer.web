const express = require('express')
const CountDown = require('../models/CountDownModel.js');
const { addCountdown, viewCountdown, welcome } = require('../controllers/CountDownController')

const router = express.Router()

router.get('/', welcome);
router.post("/add", addCountdown);
router.get("/:title", viewCountdown);

router.post('/test', async(req, res) => {
    res.send('I am Testing')
})


module.exports = router