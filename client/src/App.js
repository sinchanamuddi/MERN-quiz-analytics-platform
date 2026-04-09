
import React from "react"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import TeacherDashboard from "./TeacherDashboard"
import StudentDashboard from "./StudentDashboard"

function App(){

return(
<BrowserRouter>

<div style={{padding:"20px",background:"#2c3e50",color:"white"}}>

<Link to="/" style={{color:"white",marginRight:"20px"}}>
Teacher Dashboard
</Link>

<Link to="/student" style={{color:"white"}}>
Student Dashboard
</Link>

</div>

<Routes>

<Route path="/" element={<TeacherDashboard/>}/>
<Route path="/student" element={<StudentDashboard/>}/>

</Routes>

</BrowserRouter>
)

}

export default App
