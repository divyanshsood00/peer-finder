// Line Number 41 needs to be changed with res.auth === true thing
// API changes should be made there.



import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserCard from "../components/UserCard";
import './profile.css'

const NonTechnical = () => {

  const [checker, setChecker] = useState(false);
  const [user, setUser] = useState([]);
  const history = useHistory();
  var data;
  var result = [];
  const [lenCheck, setLenChek] = useState(0);
  const callProfilePage = async ()=>{
    try {
      const res = await fetch("https://peerfinder.herokuapp.com/search/non-technical", {
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
        <UserCard user={item} key={item.id} interest="non_technical_interest" />

    ));

    return (
      <div>
        <div className="card-container" style={{display:'flex',flexWrap:'wrap'}}>
          {rendertheresponse}
        </div>
      </div>
    );  
  } 
  else{
    return(
      <h1>Loading</h1>
    );
  }
}
export default NonTechnical;
