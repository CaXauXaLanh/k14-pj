const {Social, Business, Sport, Culture, World} = require('../models/News')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {

    //[GET] /
    // index(req,res,next) {
    //     Social.aggregate( [
    //         {$match: {'slug': 'hang-chong-dich-cap-toc-mac-ket-6-thang-bo-truong-tai-chinh-noi-gi'}},
    //         {
    //           $lookup:
    //             {
    //                 from: "Social",
    //                 localField: "tag",
    //                 foreignField: "tag",
    //                 as: "relate"
    //             }
    //        },
    //      ] )
    //         .then (hot => {
    //             res.json(hot)
    //         })
    //         .catch(next)
    // }

    index(req, res) {
        Business.find({limit: 5}, function(err, data1) {
            if (err) {
                console.log(err)
            } else {
                Culture.find({limit: 5}, function(err, data2) {
                    if (err) {
                        console.log(err)
                    } else {
                        Sport.find({limit: 5}, function(err, data3) {
                            if (err) {
                                console.log(err)
                            } else {
                                Social.find({limit: 5}, function(err, data4) {
                                    if (err) {
                                        console.log(err)
                                    } else {
                                        World.find({limit: 5}, function(err, data5) {
                                            if (err) {
                                                console.log(err)
                                            } else {
                                                res.render('home', {
                                                    layout: 'main',
                                                    data1: mutipleMongooseToObject(data1),
                                                    data2: mutipleMongooseToObject(data2),
                                                    data3: mutipleMongooseToObject(data3),
                                                    data4: mutipleMongooseToObject(data4),
                                                    data5: mutipleMongooseToObject(data5),
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }

}
module.exports = new SiteController();