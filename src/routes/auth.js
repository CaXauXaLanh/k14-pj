const router = require('express').Router()
const authController = require('../app/controllers/authController')

router.post('/register', authController.userRegister)
router.post('/login', authController.userLogin)

module.exports = router