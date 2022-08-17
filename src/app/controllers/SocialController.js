
const {Business} = require('../models/News')
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')

class SocialController{
    //GET /social/:slug
    show(req,res) {
        Business.findOne({slug : req.params.slug }, function( err, data1){
            if(err){
                console.log(err)
            }else{
                Business.find({tag: 'xa-hoi'}, function(err, data2){
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

    //GET /social
    // index ( req, res, next) {
    //     Social.find ({})
    //         .then (data => {
    //             res.render( 'social', { 
    //                 data: mutipleMongooseToObject(data)
    //             })
    //         })    
    //         .catch(next) ;
    // }
    index (req, res) {
        Business.find({tag: 'xa-hoi'}, function(err, data1){
            if(err){
                console.log(err)
            }else{
                Business.find({tag:' van-hoa'}, function(err, data2){
                    if(err){
                        console.log(err)
                    }else{
                        Business.find({tag: 'the-gioi'}, function(err, data3){
                            if(err) {
                                console.log(err)
                            }else{
                                res.render('tag/social', {
                                    title: "Xã hội",
                                    layout: 'tag',
                                    data1: mutipleMongooseToObject(data1),
                                    data2: mutipleMongooseToObject(data2),
                                    data3: mutipleMongooseToObject(data3),
                                })
                            }
                        })
                    }
                })
            }
        })
    }
}


module.exports = new SocialController();