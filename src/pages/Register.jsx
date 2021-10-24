import React, { useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import './login-register.css'

function Register() {

    const history = useHistory();

  // Setting user schema same as in backend
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  //Handling form data and pushing every result into the user 
  let entry, value;
  const handleInputs = (e)=>{
    
    entry = e.target.name;
    value = e.target.value;

    setUser({...user, [entry]:value});
  }

  // Posting the data to the database after clicking next button
  const postData = async(e)=>{
    e.preventDefault();

    const {email, password, confirmPassword} = user;

    const res = await fetch('https://peerfinder.herokuapp.com/register', {
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email, password, confirmPassword
      })
    });

    const response = await res.json();
    if(res.status === 422){
      window.alert(response.error);
    }
    else{
      window.alert("Successful Completion of first form");
      history.push("/login");
    }
  }

  return (
    <div className="sign_up_form">
      <div className="form-background">

        <div className="sign_up_form-head">
          <h1>Let's set up your account</h1>
        </div>
        <form method="POST">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your E-mail"
              name="email"
              value={user.email}
              onChange={handleInputs}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              name="password"
              value={user.password}
              onChange={handleInputs}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Confirm Your Password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleInputs}
            />
          </div>
          <div className="form-button">
            <button type="submit" className="btn btn-info" onClick={postData}>
              Next
            </button>
          </div>
          <p className="login_account">
            Already a Member? <NavLink to="/login">Login Here</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register