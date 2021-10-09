import React, { useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import './login-register.css';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async(e)=>{
    e.preventDefault();

    const res = await fetch('https://peer-finder-be.herokuapp.com/login',{
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const response = await res.json();
    if(res.status !== 201){
      window.alert(response.error);
    }
    else{
      window.alert("Successful Login");
      localStorage.setItem('token', response.tokens);
      if(response.isProfileSetup === false){
        history.push("/profile");
      }
      else{
        history.push("/home");
      }
    }
}

  return (
    <div className="sign_in_form">
      <div className="form-background">

        <div className="sign_in_form-head">
          <h1>Login to your Account</h1>
        </div>
        <form method="POST">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your E-mail"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <label>Email</label> */}
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <label>Password</label> */}
          </div>
          <div className="form-button">
            <button type="submit" className="btn btn-md btn-info" onClick={loginUser}>
              Log In
            </button>
          </div>
          <p className="create_account">
            Does not have account? <span><NavLink to="/signup">Create account</NavLink></span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login