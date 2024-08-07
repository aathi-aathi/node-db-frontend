import React, { useEffect, useState } from 'react';
import { getMentorData } from './apis';
import { useNavigate ,Link} from 'react-router-dom';
const MentorList = () => {
  const navigate= useNavigate()
    const[mentors,setMentors]=useState([])
    const getMentor = async()=>{
       const data=  await getMentorData()
       console.log(data)
          setMentors(data)
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
                    <button className='btn btn-secondary' onClick={()=>navigate(`/assign-student/${mentor.id}`)}>Student +</button>
                  </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MentorList;
