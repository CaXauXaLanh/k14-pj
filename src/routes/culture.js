const express = require('express')
const router = express.Router()

const cultureController = require('../app/controllers/CultureController')

router.get('/:slug', cultureController.show)
router.get('/', cultureController.index)

module.exports = router;