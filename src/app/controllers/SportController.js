const {Business} = require('../models/News')

const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');


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
                                res.render('tag/sport', {
                                    title: "Thể thao",
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
module.exports = new SportController();