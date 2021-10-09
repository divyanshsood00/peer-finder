import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Multiselect } from "multiselect-react-dropdown";

const Profile = () => {
  const TechInterest =  ["Web Development", "Android Development", "ML", "AI", "AWS"];
  const NonTechInterest =  ["Cricket", "Football", "Chess"];
  const CulturalInterest =  ["Singing", "Dancing", "Vocal", "Musical Instrument"];

  const [checker, setChecker] = useState(false);
  const [id, setId] = useState();
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

  // const [userData, setUserData] = useState({});

  // Getting the Signed In User Data
  const callProfilePage = async ()=>{
    try {
      const res = await fetch("https://peer-finder-be.herokuapp.com/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "token" : localStorage.getItem('token')
        },
        credentials: "include",
      });
      // console.log(res);
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

    const selectTech = (TechInterestList, selectedItem) =>{
      user.technical_interest = TechInterestList
      console.log(user.technical_interest);
    };

    const removeTech = (TechInterestList, selectedItem) =>{
      user.technical_interest = TechInterestList
      console.log(user.technical_interest);
    };
    const selectNonTech = (NonTechInterestList, selectedItem) =>{
      user.non_technical_interest = NonTechInterestList
      console.log(user.technical_interest);
    };

    const removeNonTech = (NonTechInterestList, selectedItem) =>{
      user.non_technical_interest = NonTechInterestList
      console.log(user.non_technical_interest);
    };
    const selectCultural = (CulturalInterestList, selectedItem) =>{
      user.cultural_interest = CulturalInterestList
      console.log(user.non_technical_interest);
    };

    const removeCultural = (CulturalInterestList, selectedItem) =>{
      user.cultural_interest = CulturalInterestList
      console.log(user.cultural_interest);
    };

    

    user._id = id;

    //Handling form data and pushing every result into the user 
    let entry, value;
    const handleInputs = (e)=>{
      
      entry = e.target.name;
      value = e.target.value;
  
      setUser({...user, [entry]:value});
    }
  

    const postData = async(e)=>{
      e.preventDefault();
      

      const {_id, first_name, last_name, mobile_number, bio, technical_interest, non_technical_interest, cultural_interest, year_of_passing, linkedin_url, github_url} = user;
  
      const res = await fetch('https://peer-finder-be.herokuapp.com/profile', {
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          _id, first_name, last_name, mobile_number, bio, technical_interest, non_technical_interest, cultural_interest, year_of_passing, linkedin_url, github_url
        })
      });
  
      const response = await res.json();
      if(res.status === 422){
        window.alert(response.error);
      }
      else{
        window.alert("Successful Completion of Set Profile form");
        history.push("/home");
      }
    }

    return (
      <div className="sign_up_form" style={{ marginTop: "-15px" }}>
        <div className="sign_up_form_head sign_up_profile1_head">
          <h1>Set Up Your Profile </h1>
          <h1>{id} </h1>
        </div>
        <form method="POST">
            
  
          
            
            <div className="col" style={{ marginTop: "7px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter First name"
                name="first_name"
                value={user.first_name}
                onChange={handleInputs}
              />
            </div>
            <div className="col" style={{ marginTop: "7px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Last name"
                name="last_name"
                value={user.last_name}
                onChange={handleInputs}
              />
            </div>
            <div className="col" style={{ marginTop: "7px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Mobile Number"
                name="mobile_number"
                value={user.mobile_number}
                onChange={handleInputs}
              />
            </div>
            <div className="col" style={{ marginTop: "7px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Bio"
                name="bio"
                value={user.bio}
                onChange={handleInputs}
              />
            </div>
            <div className="col" style={{ marginTop: "7px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Year of passing"
                name="year_of_passing"
                value={user.year_of_passing}
                onChange={handleInputs}
              />
            </div>
            <div className="col" style={{ marginTop: "7px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter LinkedInUrl"
                name="linkedin_url"
                value={user.linkedin_url}
                onChange={handleInputs}
              />
            </div>
            <div className="col" style={{ marginTop: "7px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter GitHub Url"
                name="github_url"
                value={user.github_url}
                onChange={handleInputs}
              />
            </div>

            <div className="col" style={{ marginTop: "7px" }}>
              <Multiselect
                options={TechInterest}
                closeIcon="close"
                isObject={false}
                selectionLimit="2"
                showCheckbox={true}
                placeholder="Select Technical Interest"
                onSelect={selectTech}
                onRemove={removeTech}
                // displayValue="key"
                showArrow
                // selectedValues={selectedValues}
                avoidHighlightFirstOption
              />
            </div>
            <div className="col" style={{ marginTop: "7px" }}>
              <Multiselect
                options={NonTechInterest}
                closeIcon="close"
                isObject={false}
                selectionLimit="2"
                showCheckbox={true}
                placeholder="Select Non Technical Interest"
                onSelect={selectNonTech}
                onRemove={removeNonTech}
                // displayValue="key"
                showArrow
                // selectedValues={selectedValues}
                avoidHighlightFirstOption
              />
            </div>
            <div className="col" style={{ marginTop: "7px" }}>
              <Multiselect
                options={CulturalInterest}
                closeIcon="close"
                isObject={false}
                selectionLimit="2"
                showCheckbox={true}
                placeholder="Select Cultural Interest"
                onSelect={selectCultural}
                onRemove={removeCultural}
                // displayValue="key"
                showArrow
                // selectedValues={selectedValues}
                avoidHighlightFirstOption
              />
            </div>

  
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "12px" }}
            onClick={postData}
            // onClick={console.log()}
          >
            Next
          </button>
        </form>
      </div>
    );  
  } 
  else{
    return(
      <h1>Loading</h1>
    );
  }
  };

export default Profile;
