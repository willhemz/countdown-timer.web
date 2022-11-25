const express = require('express')

const controllers = require('../controllers/CountDownController')


const router = express.Router()

router.post('/', controllers.createCountDown)

module.exports = router