
const mongoose = require("mongoose")

const QuizSchema = new mongoose.Schema({
 topic:String,
 questions:[{
  question:String,
  options:[String],
  correctAnswer:String
 }]
})

module.exports = mongoose.model("Quiz",QuizSchema)
