const express = require('express')
const router = express.Router()

const socialController = require('../app/controllers/SocialController')

router.get('/:slug', socialController.show)
router.get('/', socialController.index)


module.exports = router;