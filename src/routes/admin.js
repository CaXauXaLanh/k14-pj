const router = require('express').Router()
const adminController = require('../app/controllers/AdminController')

router.get('/deleteuser/:id', adminController.deleteUser)
router.get('/deletearticle/:id', adminController.deleteArticle)
router.get('/article', adminController.article)
router.get('/', adminController.index)

module.exports = router