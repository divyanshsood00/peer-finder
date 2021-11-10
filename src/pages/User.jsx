import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './profile.css'
import './User.css'


const User = () => {
  let currentURL = window.location.href;
    console.log(currentURL);
  const [checker, setChecker] = useState(false);
  const [user, setUser] = useState({
    _id : "",
    first_name : "",
    last_name : "",
    mobile_number: "",
    bio: "",
    year_of_passing: "",
    linkedin_url: "",
    github_url: "",
    technical_interest : [], 
    non_technical_interest: [], 
    cultural_interest: []
  });
  const history = useHistory();
  var data;

  // Getting the Signed In User Data
  const callProfilePage = async ()=>{
    try {
      const res = await fetch("https://peerfinder.herokuapp.com/user", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "token" : localStorage.getItem('token')
        },
        credentials: "include",
      });
      data = await res.json();
      setChecker(true);      
      console.log(data);
      
    // will be changed by auth true, thing.
      if(data.auth === false) history.push("/login");
      setUser(data.data);
    } 
    catch (error) {
      history.push("/login");
    }
  }

  useEffect(() => {
    
    if(checker === false)  callProfilePage();
  });

  

    


  if(checker){

    // user._id = id;

    return (
      <div class="Card">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <p class="title">{`Name :${user.first_name} ${user.last_name}`}</p>
    <p class="title">{`Bio :${user.bio}`}</p>
    <p class="title">{`Mobile :${user.mobile_number}`}</p>
    <p class="title">{`Year of passing :${user.year_of_passing}`}</p>
    <span class="title">{`Technical interest :`}</span>
    <span>{user.technical_interest.map((item)=>{
      return <span className="interest">{item}</span>
    })}</span>
    <br/>
    <span class="title">{`Non-Technical interest :`}</span>
    <span>{user.non_technical_interest.map((item)=>{
      return <span className="interest">{item}</span>
    })}</span>
    <br/>
    <span class="title">{`Cultural interest :`}</span>
    <span>{user.cultural_interest.map((item)=>{
      return <span className="interest">{item}</span>
    })}</span>
    <br/>
    <a style={{margin : "0px 16px"}} href={user.github_url}><i class="fa fa-github"></i></a>
    <a style={{margin : "0px 16px"}} href={user.linkedin_url}><i class="fa fa-linkedin"></i></a>
  </div>
      );
  } 
  else{
    return(
      <h1>Loading</h1>
    );
  }
  };

export default User;
            
  
          
            
