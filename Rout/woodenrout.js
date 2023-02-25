const express = require("express")
const bcrypt = require("bcrypt")
const wodrouts = express.Router()


wodrouts.use(express.json())
const { woodModle } = require("../config/dbwood")
const jwt = require("jsonwebtoken")



wodrouts.post('/add', async (req, res) => {
    try {
        const use = await woodModle.findOne({ email: req.body.email })
        if (use != null) { res.send({ msg: `email is alredy exzist` }) }
        else {
            const hasPass = await bcrypt.hash(req.body.password, 5)
            req.body.password = hasPass
            const user = new woodModle(req.body)
            await user.save()
            res.send({ msg: `User Register` })
        }
    } catch (err) {
        res.send({ msg: err.messege })
    }
 })
 
 
 //login here
 
 
 wodrouts.post('/login', async (req, res) => {
    try {
        const user = await woodModle.findOne({ email: req.body.email })
        if (user == null) { res.status(404).send({ msg: `user not found` }) }
        else {
            if (await bcrypt.compare(req.body.password, user.password)) {
                let token = jwt.sign({ name: user.name, userid: user._id }, "masai")
                res.send({ name: user.name, token: token })
            } else {
                res.send({ msg: `Wrong creditnals` })
            }
        }
    } catch (err) {
        res.send({ msg: err.messege })
    }
 })
 
 



module.exports = {
     wodrouts 
    }
