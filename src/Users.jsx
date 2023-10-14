import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Users.css"; 

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://learners-log-backend.onrender.com")
      .then((result) => setUsers(result.data))
   }, []);

  const handleDelete = (id) => {
    axios
      .delete("https://learners-log-backend.onrender.com/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  // JavaScript code for the sticky footer
  // JavaScript code for the sticky footer
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".footer");
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const documentHeight = document.body.scrollHeight;

      if (windowHeight + scrollY >= documentHeight) {
        footer.classList.add("show-footer");
      } else {
        footer.classList.remove("show-footer");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <>

    
    <div className="users-container">
    <span className="users-heading"> Learners' Log 🧑‍🎓</span><br/>
      <Link to="/create" className="btn btn-primary add-button">
       Add User
      </Link>
      <div className="user-cards">
        {users.map((user) => (
          <div className="user-card" key={user._id}>
            <div className="user-info">
              <h3 className="user-name">{user.name}</h3>
              <p className="user-email">{user.email}</p>
              <p className="user-phone">{user.phone}</p>
              <p className="user-course">{user.course}</p>


              <p className="user-age">Age: {user.age}</p>
            </div>
            <div className="user-actions">
              <Link
                to={`/update/${user._id}`}
                className="btn  edit-button"
              >
                Edit 
              </Link>
              <button
                className="btn btn-danger delete-button"
                onClick={() => handleDelete(user._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      
      </div>

      <footer className="footer">
  
  <div className="footer-icons">
    <a href="https://github.com/your-github-link" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-github"></i>
    </a>
    <a href="https://twitter.com/your-twitter-link" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-twitter"></i>    </a>
    <a href="https://twitter.com/your-twitter-link" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-linkedin"></i>    </a>
    
  </div>
  <p>&copy; 2023 Learners' Log. All rights reserved.</p>
</footer>
      </>
     
  );
}

export default Users;


