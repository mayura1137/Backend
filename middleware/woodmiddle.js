const {woodModle } = require("../config/dbwood")
const fs = require("fs")



const woodenlog = async (req, res, next) => {
    const use = await woodModle.findOne({ email: req.body.email })
    let date = Date(Date.now()).toString("hex")
    fs.appendFileSync("./wooden.txt", `The ${use.Role} || Login ${use.username} || on ${date} \n`)
    next()
}


module.exports = { 
    woodenlog 
}
