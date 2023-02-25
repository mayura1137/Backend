
const express = require("express")
const app = express()
const cors=require("cors")

require("dotenv").config()


const { connection } = require("./config/dbwood")
const { wodrouts } = require("./Rout/woodenrout")
const { woodenlog } = require("./middleware/woodmiddle")


app.use(cors())
app.use(express.json())
app.use('/user/login', woodenlog)
app.use('/user', wodrouts)



app.get("/", (req, res) => {
    res.send({ msg: `Welcome to home route` })
})


app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log(`Wood world`)
    } catch (err) {
        console.log(err)
    }
    console.log(`Server runing on port ${process.env.PORT}`)
})