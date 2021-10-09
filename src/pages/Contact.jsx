import React, { useState } from "react";
// import { NavLink, useHistory } from 'react-router-dom';

function Contact() {
//   const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const loginUser = async(e)=>{
//     e.preventDefault();

//     const res = await fetch('https://peer-finder-be.herokuapp.com/login',{
//       method: "POST",
//       withCredentials: true,
//       headers: {
//         "Content-Type" : "application/json"
//       },
//       body: JSON.stringify({
//         email, password
//       })
//     });

//     const response = await res.json();
//     if(res.status !== 201){
//       window.alert(response.error);
//     }
//     else{
//       window.alert("Successful Login");
//       console.log("Profile set up nahi hui hai");
//       // console.log(response.tokens);
//       localStorage.setItem('token', response.tokens);
//       if(response.isProfileSetup === false){
//         history.push("/setprofile1");
//       }
//       else{
//         history.push("/");
//       }
//     }
// }
  return (
    <div className="sign_in_form">
      <div className="sign_in_form_head">
        <h1>Contact Us</h1>
      </div>
      <form method="POST">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your Name"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your Email"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your message"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        
      </form>
    </div>
  );
}

export default Contact