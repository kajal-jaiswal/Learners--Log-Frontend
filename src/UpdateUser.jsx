import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./UpdateUsers.css"; 

function UpdateUsers() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://learners-log-backend.onrender.com/getUser/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setPhone(result.data.phone);
        setCourse(result.data.course);
        setAge(result.data.age);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("https://learners-log-backend.onrender.com/updateUser/" + id, { name, email, phone,course,age })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="update-users-container">
      <div className="update-users-card">
        <form onSubmit={Update}>
          <h2 className="update-users-heading">Update User</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
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
              value={phone}
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
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
       
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              className="form-control"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">Update</button>
        </form>
      </div>
   </div>

   

    
    
  );
  
}
   

export default UpdateUsers;
