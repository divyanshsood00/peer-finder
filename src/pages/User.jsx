// Line Number 41 needs to be changed with res.auth === true thing
// API changes should be made there.



import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './profile.css'

const User = () => {

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
      if(data.first_name === "") history.push("/login");
      setUser(data);
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
        <div>
            <h1>{user._id}</h1>
            <h1>{user.first_name}</h1>
            <h1>{user.last_name}</h1>
            <h1>{user.github_url}</h1>
            <h1>{user.linkedin_url}</h1>
            <h1>{user.bio}</h1>
            <h1>{user.mobile_number}</h1>
            <h1>{user.year_of_passing}</h1>
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
            
  
          
            
