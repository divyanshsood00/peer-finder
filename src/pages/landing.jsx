import React from 'react'
import { Link } from 'react-router-dom'
import './landing.css'

function Landing() {
    return (
        <div className='landing-container'>
            <article>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo repudiandae natus officiis doloremque laboriosam modi tempora aspernatur neque vel. Nobis dignissimos sit quo doloremque magnam? Iusto sequi doloribus odio adipisci.</article>
            <div className="buttons">
            <h2>Start your journey here</h2>
            <Link to='/login'><button className="btn btn-lg btn-success">Login</button></Link>
            <Link to='/register'><button className="btn btn-lg btn-outline-dark">Create Account</button></Link>
            </div>
            {/* <button className='btn btn-lg btn-outline-dark'>Take me home</button> */}

        </div>
    )
}

export default Landing
