
const express = require("express")
const router = express.Router()
const Result = require("../models/Result")

router.post("/submit", async(req,res)=>{
 const {studentName,score} = req.body
 const result = new Result({studentName,score})
 await result.save()
 res.json(result)
})

router.get("/leaderboard", async(req,res)=>{
 const results = await Result.find().sort({score:-1})
 const ranked = results.map((r,i)=>({
  ...r._doc,
  rank:i+1
 }))
 res.json(ranked)
})

router.put("/:id", async(req,res)=>{
 const {studentName,score} = req.body
 const updated = await Result.findByIdAndUpdate(
  req.params.id,
  {studentName,score},
  {new:true}
 )
 res.json(updated)
})

router.delete("/:id", async(req,res)=>{
 await Result.findByIdAndDelete(req.params.id)
 res.json({message:"Student deleted"})
})

module.exports = router
