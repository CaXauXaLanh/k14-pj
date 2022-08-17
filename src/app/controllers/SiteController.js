const {Social, Business, Sport, Culture, World} = require('../models/News')
const User = require('../models/User')
const { mutipleMongooseToObject } = require('../../util/mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { off } = require('../models/User')

class SiteController {

    //[GET] /
    index(req, res) {
        Business.find({}, function(err, data1) {
            if (err) {
                console.log(err)
            } else {
                if(req.cookies.accessToken) {
                    const cookie = req.cookies.accessToken
                    const decode = jwt.verify(cookie, 'secretkey')
                    const userId = decode.id
                    User.findOne({_id: userId}, function(err, user) {
                        if(err) {
                            console.log(err)
                        } else {
                            res.render('home', {
                                admin: user.admin,
                                username1: user.username,
                                layout: 'main',
                                data1: mutipleMongooseToObject(data1),
                            }
                        )}
                    })
                }else {
                res.render('home', {
                    layout: 'main',
                    data1: mutipleMongooseToObject(data1)
                    })
                }
            }
        })
    }

    //[GET] /timkiem/:params
    timkiem(req, res, next) {
        const searchField = req.query.name
        Business.find({title: new RegExp(searchField,'i')})
            .then(data => {
                res.send(data)
            })
    }

}
module.exports = new SiteController();