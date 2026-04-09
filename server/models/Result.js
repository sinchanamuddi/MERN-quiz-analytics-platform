
const mongoose = require("mongoose")

const ResultSchema = new mongoose.Schema({
 studentName:String,
 score:Number,
 date:{type:Date,default:Date.now}
})

module.exports = mongoose.model("Result",ResultSchema)
