const User = require('../models/User')
const {Business} = require ('../models/News')
const jwt = require('jsonwebtoken')
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')

class adminController {

    index (req, res) {
        if (!req.cookies.accessToken){
            return res.status(404).render('errorPage', {
                layout: 'nothing'
            })
        }
        const decode = jwt.verify(req.cookies.accessToken, 'secretkey')
        User.findOne({_id: decode.id}, function(err, user) {
            if (!user.admin) {
                res.status(404).render('errorPage', {
                    layout: 'nothing'
                })
            } else {
                User.find({}, function(err, data) {
                    if (err) {
                        console.log(err)
                    }else {
                        res.render ('admin/admin', {
                            title: 'User Management',
                            layout: 'user',
                            data: mutipleMongooseToObject(data)
                        })
                    }
                })
            }
        })
    }

    article (req, res) {
        if (!req.cookies.accessToken){
            return res.status(404).render('errorPage', {
                layout: 'nothing'
            })
        }
        const decode = jwt.verify(req.cookies.accessToken, 'secretkey')
        User.findOne({_id: decode.id}, function(err, user) {
            if (!user.admin) {
                res.status(404).render('errorPage', {
                    layout: 'nothing'
                })
            } else {
                Business.find({}, function(err, data1) {
                    if(err) {
                        console.log(err)
                    } else {
                        res.render('admin/article', {
                            title: 'Article Management',
                            layout: 'user',
                            data1: mutipleMongooseToObject(data1)
                        })
                    }
                })
            }
        })
    }

    deleteUser(req, res) {
        if (!req.cookies.accessToken){
            return res.status(404).render('errorPage', {
                layout: 'nothing'
            })
        }
        const decode = jwt.verify(req.cookies.accessToken, 'secretkey')
        User.findOne({_id: decode.id}, function(err, user) {
            if (!user.admin) {
                res.status(404).render('errorPage', {
                    layout: 'nothing'
                })
            } else {
                if (!req.cookies.accessToken){
                    return res.status(404).render('errorPage', {
                        layout: 'nothing'
                    })
                }else {
                    User.deleteOne({_id: req.params.id}, function(err) {
                        if (err) {
                            console.log(err)
                        } else {
                            res.redirect('back')
                        }
                    })
                }
            }
        })
    }

    deleteArticle(req, res) {
        if (!req.cookies.accessToken){
            return res.status(404).render('errorPage', {
                layout: 'nothing'
            })
        }
        const decode = jwt.verify(req.cookies.accessToken, 'secretkey')
        User.findOne({_id: decode.id}, function(err, user) {
            if (!user.admin) {
                res.status(404).render('errorPage', {
                    layout: 'nothing'
                })
            } else {
                if (!req.cookies.accessToken){
                    return res.status(404).render('errorPage', {
                        layout: 'nothing'
                    })
                }else {
                    Business.deleteOne({_id: req.params.id}, function(err) {
                        if (err) {
                            console.log(err)
                        } else {
                            res.redirect('back')
                        }
                    })
                }
            }
        })
    }
}

module.exports = new adminController()