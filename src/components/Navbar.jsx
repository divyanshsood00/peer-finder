import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar(props) {
    const [active, setActive] = useState()
    useEffect(() => {
        let currentURL = window.location.href
        console.log(currentURL)
        if (currentURL.endsWith('/'))
            setActive('PEER FINDER');
        else if (currentURL.endsWith('/home'))
        setActive('Home');
        // else if (currentURL.endsWith("/notes"))
        //     setActive('Notes');
        // else if (currentURL.endsWith('/courses'))
        //     setActive('Courses')
        else if (currentURL.endsWith('/profile'))
            setActive('Profile')
        else if (currentURL.endsWith('/contactus'))
            setActive('Contact Us') 
    }, [active])
    return (
        <div className='navbar'>
            <div className="navbar__active">
                {active}
            </div>
            <div className="navbar__items">
                {/* {active !== 'PEER FINDER'&& <Link to='/'className="navbar__item">
                <div onClick={()=>setActive("PEER FINDER")}>PEER FINDER</div>
                </Link>} */}
                {active !== 'Home'&& <Link to='/home'className="navbar__item">
                <div onClick={()=>{setActive("Home");props.navHandler();}}>Home</div>
                </Link>}
                {active !== 'Login'&& <Link to='/login' className="navbar__item">
                    <div onClick={()=>setActive("Login")}>Login</div>
                </Link>} 
                {/* {active !== 'Courses'&& <Link to='/courses'className="navbar__item">
                    <div onClick={()=>setActive("Create Account")}>Create Account</div>
                </Link>} } */}
                {active !== 'Profile'&& <Link to='/profile'className="navbar__item">
                    <div onClick={()=>setActive("Profile")}>Profile</div>
                </Link>}
                {active !== 'Contact Us'&& <Link to='/contactus'className="navbar__item">
                    <div onClick={()=>setActive("Contact Us")}>Contact Us</div>
                </Link>}
            </div>
        </div>
    )
}

export default Navbar
