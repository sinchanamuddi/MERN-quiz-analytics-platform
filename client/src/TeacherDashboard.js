
import React,{useState,useEffect} from "react"

function TeacherDashboard(){

 const [question,setQuestion] = useState("")
 const [opt1,setOpt1] = useState("")
 const [opt2,setOpt2] = useState("")
 const [opt3,setOpt3] = useState("")
 const [opt4,setOpt4] = useState("")
 const [answer,setAnswer] = useState("")
 const [students,setStudents] = useState([])
 const [editId,setEditId] = useState(null)
 const [editName,setEditName] = useState("")
 const [editScore,setEditScore] = useState("")

 const loadStudents = ()=>{
 fetch("http://localhost:5000/api/results/leaderboard")
 .then(res=>res.json())
 .then(data=>setStudents(data))
 }

 useEffect(()=>{
 loadStudents()
 },[])

 const createQuiz = async()=>{

 await fetch("http://localhost:5000/api/quiz/create",{

 method:"POST",
 headers:{"Content-Type":"application/json"},

 body:JSON.stringify({

 topic:"General",

 questions:[{
 question,
 options:[opt1,opt2,opt3,opt4],
 correctAnswer:answer
 }]

 })

 })

 alert("Quiz Created")

 }

 const deleteStudent = async(id)=>{

 await fetch(`http://localhost:5000/api/results/${id}`,{
 method:"DELETE"
 })

 loadStudents()

 }

 const saveEdit = async(id)=>{

 await fetch(`http://localhost:5000/api/results/${id}`,{

 method:"PUT",

 headers:{
 "Content-Type":"application/json"
 },

 body:JSON.stringify({
 studentName:editName,
 score:editScore
 })

 })

 setEditId(null)
 loadStudents()

 }

 return(

 <div style={{padding:"20px"}}>

 <h2>Create Quiz</h2>

 <input placeholder="Question" onChange={e=>setQuestion(e.target.value)}/><br/><br/>
 <input placeholder="Option 1" onChange={e=>setOpt1(e.target.value)}/><br/>
 <input placeholder="Option 2" onChange={e=>setOpt2(e.target.value)}/><br/>
 <input placeholder="Option 3" onChange={e=>setOpt3(e.target.value)}/><br/>
 <input placeholder="Option 4" onChange={e=>setOpt4(e.target.value)}/><br/><br/>
 <input placeholder="Correct Answer" onChange={e=>setAnswer(e.target.value)}/><br/><br/>

 <button onClick={createQuiz}>Save Quiz</button>

 <h2 style={{marginTop:"40px"}}>Student Records</h2>

 <table border="1" width="100%">

 <thead>
 <tr>
 <th>Rank</th>
 <th>Name</th>
 <th>Score</th>
 <th>Actions</th>
 </tr>
 </thead>

 <tbody>

 {students.map((s)=>(

 <tr key={s._id}>

 <td>{s.rank}</td>

 <td>

 {editId===s._id ? (
 <input value={editName} onChange={e=>setEditName(e.target.value)}/>
 ) : (
 s.studentName
 )}

 </td>

 <td>

 {editId===s._id ? (
 <input value={editScore} onChange={e=>setEditScore(e.target.value)}/>
 ) : (
 s.score
 )}

 </td>

 <td>

 {editId===s._id ? (
 <button onClick={()=>saveEdit(s._id)}>Save</button>
 ) : (
 <button onClick={()=>{
 setEditId(s._id)
 setEditName(s.studentName)
 setEditScore(s.score)
 }}>Edit</button>
 )}

 <button onClick={()=>deleteStudent(s._id)} style={{marginLeft:"10px"}}>
 Delete
 </button>

 </td>

 </tr>

 ))}

 </tbody>

 </table>

 </div>

 )

}

export default TeacherDashboard
