const {Business} = require('../models/News')
const User = require('../models/User')
const {mutipleMongooseToObject} = require('../../util/mongoose')
const {mongooseToObject} = require('../../util/mongoose')
const jwt = require('jsonwebtoken')


class SportController {

    //[GET] /the-thao/slug
    show(req,res) {
        Business.findOne({slug : req.params.slug }, function( err, data1){
            if(err){
                console.log(err)
            }else{
                Business.find({tag: 'the-thao'}, function(err, data2){
                    if(err){
                        console.log(err)
                    }else{
                        res.render('news/show', {
                            layout: 'news',
                            data1: mongooseToObject(data1), 
                            data2: mutipleMongooseToObject(data2)
                        })
                    }
                })
            }
        }) 
    }

    //[GET] /
    index (req, res) {
        Business.find({tag: 'the-thao'}, function(err, data1){
            if(err){
                console.log(err)
            }else{
                Business.find({tag: 'xa-hoi'}, function(err, data2){
                    if(err){
                        console.log(err)
                    }else{
                        Business.find({tag: 'the-gioi'}, function(err, data3){
                            if(err) {
                                console.log(err)
                            }else{
                                if (req.cookies.accessToken) {
                                    const cookie = req.cookies.accessToken
                                    const decode = jwt.verify(cookie, 'secretkey')
                                    const userId = decode.id
                                    User.findOne({_id: userId}, function(err, user) {
                                        if(err) {
                                            console.log(err)
                                        } else {
                                            res.render('tag/tagPage', {
                                                admin: user.admin,
                                                username1: user.username,
                                                title: 'Văn hoá',
                                                layout: 'tag',
                                                data1: mutipleMongooseToObject(data1),
                                                data2: mutipleMongooseToObject(data2),
                                                data3: mutipleMongooseToObject(data3),
                                            }
                                        )}
                                    })
                                } else {
                                    res.render('tag/tagPage', {
                                    title: "Thể thao",
                                    layout: 'tag',
                                    data1: mutipleMongooseToObject(data1),
                                    data2: mutipleMongooseToObject(data2),
                                    data3: mutipleMongooseToObject(data3),
                                })
                                }
                                
                            }
                        })
                    }
                })
            }
        })
    }

}
module.exports = new SportController();