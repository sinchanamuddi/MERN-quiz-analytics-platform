
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const quizRoutes = require("./routes/quizRoutes")
const resultRoutes = require("./routes/resultRoutes")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/quizAnalytics")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))

app.use("/api/quiz",quizRoutes)
app.use("/api/results",resultRoutes)

app.listen(5000,()=>console.log("Server running on port 5000"))
