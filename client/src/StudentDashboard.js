
import React,{useEffect,useState} from "react"

function StudentDashboard(){

 const [quiz,setQuiz] = useState(null)
 const [name,setName] = useState("")
 const [answer,setAnswer] = useState("")
 const [score,setScore] = useState(null)

 useEffect(()=>{

 fetch("http://localhost:5000/api/quiz")
 .then(res=>res.json())
 .then(data=>setQuiz(data))

 },[])

 const submitQuiz = async()=>{

 let result = 0

 if(answer === quiz.questions[0].correctAnswer){
 result = 1
 }

 const res = await fetch("http://localhost:5000/api/results/submit",{

 method:"POST",

 headers:{
 "Content-Type":"application/json"
 },

 body:JSON.stringify({
 studentName:name,
 score:result
 })

 })

 const data = await res.json()

 setScore(data.score)

 }

 if(!quiz) return <p>Loading quiz...</p>

 return(

 <div style={{padding:"20px"}}>

 <h2>Take Quiz</h2>

 <input placeholder="Student Name" onChange={e=>setName(e.target.value)}/>

 <h3>{quiz.questions[0].question}</h3>

 {quiz.questions[0].options.map((o,i)=>(

 <div key={i}>

 <input
 type="radio"
 name="answer"
 value={o}
 onChange={e=>setAnswer(e.target.value)}
 />

 {o}

 </div>

 ))}

 <br/>

 <button onClick={submitQuiz}>Submit Answers</button>

 {score !== null && <h3>Your Score: {score}</h3>}

 </div>

 )

}

export default StudentDashboard
