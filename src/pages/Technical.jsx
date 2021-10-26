// Line Number 41 needs to be changed with res.auth === true thing
// API changes should be made there.



import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './profile.css'

const Technical = () => {

  const [checker, setChecker] = useState(false);
  const [user, setUser] = useState([]);
  const history = useHistory();
  var data;
  var result = [];
  const [lenCheck, setLenChek] = useState(0);
  const callProfilePage = async ()=>{
    try {
      const res = await fetch("https://peerfinder.herokuapp.com/search/technical", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "token" : localStorage.getItem('token')
        },
        credentials: "include",
      });
      data = await res.json();
            
      // console.log(data.length);
      setLenChek(data.length);

    // will be changed by auth true, thing.
      if(data.first_name === "") history.push("/login");
      await data.map(item =>{
        setChecker(true);
        result.push(item);
        setUser((user) => [...user, item]);
      });
      
      
    } 
    catch (error) {
      history.push("/login");
    }
  }


  useEffect(() => {
    if(checker === false && lenCheck === 0)  callProfilePage();
  }); 

  

    


  if(checker && user.length >= lenCheck){
    
    const rendertheresponse = user.map((item) => (
      <h1>{item.first_name}</h1>
    ));

    return (
      <div>
        {rendertheresponse}
      </div>
    );  
  } 
  else{
    return(
      <h1>Loading</h1>
    );
  }
}
export default Technical;
            
  
          
            
