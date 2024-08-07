
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MentorList from './mentor'
import UserForm from './add'
import Home from './home'
import StudentList from './students'
import AssignStudents from './assign-students'
import AssigntMentor from './assign-mentor'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/mentor' element={<MentorList/>}></Route>
      <Route path='/add' element={<UserForm/>}></Route>
      <Route path='/students' element={<StudentList/>}></Route>
      <Route path='/assign-student/:mentorId' element={<AssignStudents/>}></Route>
      <Route path='/assign-mentor/:studentId' element={<AssigntMentor/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
