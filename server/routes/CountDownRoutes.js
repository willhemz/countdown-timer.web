const express = require('express')


const router = express.Router()

router.get('/', (req, res) => {
    console.log('up amd running')
    res.status(200)
})

module.exports = router