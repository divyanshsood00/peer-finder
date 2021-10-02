import React,{useState} from 'react'
import { FaAngleRight } from 'react-icons/fa'
import './landing.css'

function Landing() {
    const [started, setstarted] = useState(false)
    return (
        <div className='landing-container'>
            <article>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo repudiandae natus officiis doloremque laboriosam modi tempora aspernatur neque vel. Nobis dignissimos sit quo doloremque magnam? Iusto sequi doloribus odio adipisci.</article>
            <div className="buttons">
            <h2>Start your journey here</h2>
                {started && <> <button className="btn btn-lg btn-success">Login</button>
                <button className="btn btn-lg btn-outline-dark">Create Account</button><br/></>}
                {!started && <div className="start">
                <button onClick={()=>setstarted(!started)}><FaAngleRight/></button>
                </div>}
            </div>
            <button className='btn btn-lg btn-outline-dark'>Take me home</button>

        </div>
    )
}

export default Landing
