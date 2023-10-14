import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateUsers.css'; 

function CreateUsers() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [course, setCourse] = useState('');
  const [age, setAge] = useState('');



  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post('https://learners-log-backend.onrender.com/createUser', { name, email, phone,course,age })
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className='create-users-container'>
      <div className='create-users-card'>
        <form onSubmit={Submit}>
          <h2 className='create-users-heading'>Add User</h2>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              className='form-control'
              placeholder='Enter Name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              className='form-control'
              placeholder='Enter Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Phone</label>
            <input
              type='phone'
              id='phone'
              className='form-control'
              placeholder='Enter Phone No.'
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='course'>Course</label>
            <input
              type='course'
              id='course'
              className='form-control'
              placeholder='Enter Course'
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='age'>Age</label>
            <input
              type='text'
              id='age'
              className='form-control'
              placeholder='Enter Age'
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-success'>
            Submit
          </button>
        </form>
      </div>
      </div>
     
 
    
  );
}

export default CreateUsers;
