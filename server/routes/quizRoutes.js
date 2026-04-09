
const express = require("express")
const router = express.Router()
const Quiz = require("../models/Quiz")

router.post("/create", async(req,res)=>{
 const quiz = new Quiz(req.body)
 await quiz.save()
 res.json(quiz)
})

router.get("/", async(req,res)=>{
 const quiz = await Quiz.findOne()
 res.json(quiz)
})

module.exports = router
