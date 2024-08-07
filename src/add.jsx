import React, { useState } from 'react';
import { createMentorData, createStudentData } from './apis';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    batch: '',
    role: 'student', // default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
    if(formData.role == 'mentor'){
         await createMentorData(formData)
    navigate('/mentor')
}else{
    await createStudentData(formData)
    navigate('/students')
}
 };

  return (
    <div className='container mt-5' style={{display:'flex',justifyContent:'center',maxWidth:'450px'}}>
      
      <form onSubmit={handleSubmit} style={{width:'100%'}}>
      
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="batch" className="form-label">Batch</label>
          <input
            type="text"
            className="form-control"
            id="batch"
            name="batch"
            value={formData.batch}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role</label>
          <select
            className="form-select"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="mentor">Mentor</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
