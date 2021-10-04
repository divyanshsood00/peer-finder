import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [active, setActive] = useState()
    useEffect(() => {
        let currentURL = window.location.href
        console.log(currentURL)
        if (currentURL.endsWith('/'))
            setActive('PEER FINDER');
        else if (currentURL.endsWith('/home'))
        setActive('home');
        else if (currentURL.endsWith("/notes"))
            setActive('Notes');
        else if (currentURL.endsWith('/courses'))
            setActive('Courses') 
    }, [active])
    return (
        <div className='navbar'>
            <div className="navbar__active">
                {active}
            </div>
            <div className="navbar__items">
                {active !== 'PEER FINDER'&& <Link to='/'className="navbar__item">
                <div onClick={()=>setActive("PEER FINDER")}>PEER FINDER</div>
                </Link>}
                {active !== 'home'&& <Link to='/home'className="navbar__item">
                <div onClick={()=>setActive("Home")}>Home</div>
                </Link>}
                {active !== 'Notes'&& <Link to='/notes' className="navbar__item">
                    <div onClick={()=>setActive("Notes")}>Notes</div>
                </Link>} 
                {active !== 'Courses'&& <Link to='/courses'className="navbar__item">
                    <div onClick={()=>setActive("Courses")}>Courses</div>
                </Link>}
            </div>
        </div>
    )
}

export default Navbar
