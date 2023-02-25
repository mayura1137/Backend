const mongoose = require("mongoose")
mongoose.set('strictQuery', false)


require("dotenv").config()


const wood = mongoose.connect(process.env.mongoURL)


const userSchema = mongoose.Schema({
    "name": { type: String, required: true },
    "email": { type: String, required: true },
    "password": { type: String, required: true}
})



const woodModle = mongoose.model('Wood', userSchema)



module.exports = {
      woodModle
     }
