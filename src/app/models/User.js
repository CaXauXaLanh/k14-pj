const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true, minLength:6},
    email: {type: String, require: true},
    admin: {type: Boolean, default: false}
},{timestamps: true},
{collection: 'User'}
)

module.exports = mongoose.model("User", userSchema)