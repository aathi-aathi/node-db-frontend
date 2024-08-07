import React, { useEffect, useState } from 'react';
import { assignMentorData, getMentorData } from './apis';
import { useNavigate ,Link, useParams} from 'react-router-dom';
const AssigntMentor = () => {
  const navigate= useNavigate()
  const params = useParams()
  const studentId = params.studentId
    const[mentors,setMentors]=useState([])
    const getMentor = async()=>{
       const data=  await getMentorData()
       console.log(data)
          setMentors(data)
    }
  const assignMentor = async(id)=>{
  const data =  await assignMentorData({studentId:studentId,mentorId:id})
  if(data.code == 1){
    alert('This student already assigned for this student')
  }
  }
useEffect(()=>{
    getMentor()
},[])
  return (
    <div className="container mt-5">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
      <h2 className="mb-4">Mentor List</h2>
      <div style={{display:'flex',gap:'1rem'}}>
        <Link to='/add' style={{fontWeight:'bold'}}>Add mentor</Link>
      <Link to='/' style={{fontWeight:'bold'}}>Home</Link></div>
      </div>
      <table className="table table-striped" style={{textAlign:'center'}}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Batch</th>
            <th>Students</th>
          </tr>
        </thead>
        <tbody>
          {mentors.map((mentor) =>(
            <tr key={mentor.id}>
              <td>{mentor.id}</td>
              <td>{mentor.name}</td>
              <td>{mentor.batch}</td>
              <td>
                  <ul>
                    {mentor.students.map((student,index) => (
                      <li key={index}  style={{listStyleType:'none'}}>{student}</li>
                    ))}
                   
                  </ul>
              </td>
              <td>
                <button className='btn btn-success' onClick={()=>assignMentor(mentor.id)} >Assign</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AssigntMentor;
