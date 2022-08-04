const {Hot, Social} = require('../models/News')
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
    index(req,res,next) {
        Hot.find({})
            .then (hot => {
                res.render('home', {
                    hot: mutipleMongooseToObject(hot),
                    layout: 'main'
                })
            })
            .catch(next)
    }

}
module.exports = new SiteController();