const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')
const authController = require('../app/controllers/authController')

router.get('/tim-kiem', siteController.timkiem)
router.get('/logout', authController.userLogout)
router.post('/register', authController.userRegister)
router.post('/login', authController.userLogin)
router.get('/', siteController.index)



module.exports = router;