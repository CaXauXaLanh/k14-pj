const siteRouter = require('./site')
const socialRouter = require('./social')
const worldRouter = require('./world')
const businessRouter = require('./business')
const sportRouter = require('./sport')
const cultureRouter = require('./culture')

function route(app) {

    app.use('/van-hoa', cultureRouter)
    app.use('/the-thao', sportRouter)
    app.use('/kinh-te', businessRouter)
    app.use('/the-gioi', worldRouter)
    app.use('/xa-hoi', socialRouter)
    app.use('/', siteRouter)
}

module.exports = route;