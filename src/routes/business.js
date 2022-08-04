const express = require('express')
const router = express.Router()

const businessController = require('../app/controllers/BusinessController')

router.get('/:slug', businessController.show)
router.get('/', businessController.index)


module.exports = router;