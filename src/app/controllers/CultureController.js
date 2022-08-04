const {Culture} = require('../models/News')
const {Business} = require('../models/News')
const {World} = require('../models/News')
const {mutipleMongooseToObject} = require('../../util/mongoose')
const {mongooseToObject} = require('../../util/mongoose')

class CultureController  {
    //[GET] /van-hoa/:slug
    show(req,res) {
        Culture.findOne({slug : req.params.slug }, function( err, data1){
            if(err){
                console.log(err)
            }else{
                Culture.find({}, function(err, data2){
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
        Culture.find({}, function(err, data1){
            if(err){
                console.log(err)
            }else{
                Business.find({}, function(err, data2){
                    if(err){
                        console.log(err)
                    }else{
                        World.find({}, function(err, data3){
                            if(err) {
                                console.log(err)
                            }else{
                                res.render('culture', {
                                    title: "Văn hoá",
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

module.exports = new CultureController();