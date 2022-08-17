const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class authController {
    async userLogin (req, res) {
        try {
            const user = await User.findOne({username: req.body.username})
            if(!user) {
                return res.status(404).alert("Sai tên đăng nhập")
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            )
            if(!validPassword) {
                return res.status(404).alert("Sai mat khau")
            }
            if (user && validPassword) {
                const accessToken = jwt.sign(
                    {
                        id: user.id,
                        admin: user.admin
                    },
                    "secretkey",
                )
                res.cookie("accessToken", accessToken, {
                    httpOnly: false,
                    secure: false,
                    sameSite: "strict"
                })
                const {password, ...other} = user._doc
                res.status(200).redirect('/')
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async userRegister(req, res) {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)

            const newUser = await new User({
                username: req.body.username,
                password: hashed,
                email: req.body.email
            })

            const user = await newUser.save()
            res.status(200).redirect('/')
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async userLogout (req, res) {
        res.clearCookie("accessToken").redirect('/')
    }
}

module.exports = new authController()