import React, { useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';

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
      <div className="sign_in_form_head">
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
        </div>
        <button type="submit" className="btn btn-primary" onClick={loginUser}>
          Log In
        </button>
        <p className="create_account">
          Does not have account? <NavLink to="/signup">Create account</NavLink>
        </p>
      </form>
    </div>
  );
}

export default Login