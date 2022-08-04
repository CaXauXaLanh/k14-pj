const express = require('express')
const router = express.Router()

const sportController = require('../app/controllers/SportController')

router.get('/:slug', sportController.show)
router.get('/', sportController.index)


module.exports = router;