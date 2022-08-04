const mongoose = require("mongoose");

const Schema = mongoose.Schema

const newsSchema = new Schema({
    title: String,
    tag: String,
    description: String,
    content: String,
    image: String,
    slug: String,
})

const Social = mongoose.model('social', newsSchema, 'Social')
const Sport = mongoose.model('sport', newsSchema, 'Sport')
const Business = mongoose.model('business', newsSchema, 'Business')
const Culture = mongoose.model('culture', newsSchema, 'Culture')
const World = mongoose.model('world', newsSchema, 'World')
const Hot = mongoose.model('hot', newsSchema, 'Hot')

module.exports = {Social, Sport, Business, Culture, World, Hot}
