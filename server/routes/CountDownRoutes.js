const express = require('express')


const router = express.Router()

router.get('/', (req, res) => {
    console.log('up amd running')
    res.status(200)
})
// router.get('/:id', getRecipe)
// router.put('/:id', authenticate, updateRecipe)
// router.post('/', authenticate, createRecipe)
// router.delete('/:id', authenticate, deleteRecipe)
// router.patch('/:id/publish', authenticate, isPublished)
// router.patch('/:id/vote', authenticate, voteRecipe)

module.exports = router