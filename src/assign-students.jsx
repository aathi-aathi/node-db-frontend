import React from 'react';
import { useState,useEffect } from 'react';
import { assignStudentData, getStudentsData, selectStudentData } from './apis';
import {Link, useNavigate, useParams} from 'react-router-dom';
const AssignStudents = () => {
    const[students,setStudents]=useState([])
    const navigate = useNavigate()
    const [render,setRender]=useState(0)
    const params = useParams()
    const mentorId = params.mentorId
    const getStudents = async()=>{
       const data=  await getStudentsData()
        setStudents(data)
    }
    const selectStudents = async(id) => {
     await selectStudentData(id)
     setRender(render+1)
    };
    const assignStudents = async()=>{
     await  assignStudentData(mentorId)
        navigate('/mentor')
    }
useEffect(()=>{
    getStudents()
},[render])
  return (
    <div className="container mt-5">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
       
      <h2 className="mb-4">
        select students
      </h2>
      <div style={{display:'flex',gap:'1rem'}}>
      <Link to='/' style={{fontWeight:'bold'}}>Home</Link></div>
     
      </div>
      <table className="table table-striped" style={{textAlign:'center'}}>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Batch</th>
            <th>Mentor</th>
            <th>Previous Mentor</th>
          </tr>
        </thead>

       <tbody>
           { students.filter((student)=>student.mentor === null).map((student) => (
            <tr key={student.id}>
                <td>
               {!student.isSelected ? <i className="fa-regular fa-square" onClick={()=>selectStudents(student.id)}></i> :
                <i className="fa-solid fa-square-check" onClick={()=>selectStudents(student.id)} ></i>}
                </td>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.batch}</td>
              <td>{student.mentor}</td>
              <td>{student.prevMentor}</td>
            </tr> 
          ))} 
        </tbody> 
      </table>
      {students.length > 0 && <button className='btn btn-primary' onClick={assignStudents}>Sumbit</button>}
      
    </div>
  );
};

export default AssignStudents;
