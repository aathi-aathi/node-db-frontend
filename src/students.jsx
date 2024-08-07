import React from 'react';
import { useState,useEffect } from 'react';
import { getStudentsData } from './apis';
import { Link, useNavigate} from 'react-router-dom';
const StudentList = () => {
    const[students,setStudents]=useState([])
    const navigate = useNavigate()
    const getStudents = async()=>{
       const data=  await getStudentsData()
       console.log(data)
       setStudents(data)
    }
useEffect(()=>{
    getStudents()
},[])
  return (
    <div className="container mt-5">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
       
      <h2 className="mb-4">Students List</h2>
      <div style={{display:'flex',gap:'1rem'}}>
        <Link to='/add' style={{fontWeight:'bold'}}>Add student</Link>
      <Link to='/' style={{fontWeight:'bold'}}>Home</Link></div>
     
      </div>
      <table className="table table-striped" style={{textAlign:'center'}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Batch</th>
            <th>Mentor</th>
            <th>Previous Mentor</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.batch}</td>
              <td>{student.mentor}</td>
              <td>{student.prev_mentors[student.prev_mentors.length-2]}</td>
              <td>
                <button className='btn btn-secondary' style={{height:'100%',display:'flex',alignItems:'center',gap:'0.5rem'}} 
                onClick={()=>navigate(`/assign-mentor/${student.id}`)}>Mentor <i className="fa-solid fa-pencil"></i> </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
