const {World} = require('../models/News')
const {Social} = require('../models/News')
const {Business} = require('../models/News')

const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');


class WorldController {

    //[GET] /the-gioi/slug
    show(req,res) {
        World.findOne({slug : req.params.slug }, function( err, data1){
            if(err){
                console.log(err)
            }else{
                World.find({}, function(err, data2){
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
        World.find({}, function(err, data1){
            if(err){
                console.log(err)
            }else{
                Business.find({}, function(err, data2){
                    if(err){
                        console.log(err)
                    }else{
                        Social.find({}, function(err, data3){
                            if(err) {
                                console.log(err)
                            }else{
                                res.render('sport', {
                                    title: "Thế giới",
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
module.exports = new WorldController();