import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './profile.css'

const Profile = () => {

  const [checker, setChecker] = useState(false);
  const [id, setId] = useState();

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
      
      if(data.auth !== true) history.push("/login");
      setId(data._id);
    } 
    catch (error) {
      history.push("/login");
    }
  }

  useEffect(() => {
    if(checker === false)  callProfilePage();
  });

  

    


  if(checker){

    user._id = id;

    return (
      <h1>{user._id}</h1>
    );  
  } 
  else{
    return(
      <h1>Loading</h1>
    );
  }
  };

export default Profile;
            
  
          
            
