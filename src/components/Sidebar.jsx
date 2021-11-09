import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaArchive, FaBook, FaBrain, FaDiscord, FaGithub, FaMailBulk, FaMoneyBill, FaTelegram} from 'react-icons/fa'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__main">
            <div className="sidebar__logo-container">
                {/* <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.jQSGViId2BHzhFLl5yH1AgHaMW%26pid%3DApi&f=1" alt="CodeAcad Logo" className='sidebar__logo' /> */}
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.hnPusoAxiAqGgVS153rJUgHaFj%26pid%3DApi&f=1" alt="CodeAcad Logo" className='sidebar__logo' />
            </div>
            <h2 className="sidebar__name">Peer <span className="last-name">Finder</span></h2>
            <h5 className="sidebar__item sidebar__title">Empowering SGSITS Students</h5>

            </div>
            <hr />
            <div className="sidebar__nav">
                <div className="nav">
                <NavLink to='/home/technical'><FaBook/> Technical Interests</NavLink>

                </div>
                <div className="nav">
                <NavLink to='/home/non-technical'><FaMoneyBill/> Non Technical Interests</NavLink>

                </div>
                <div className="nav">
                <NavLink to='/home/cultural'><FaArchive/> Cultural Interests</NavLink>

                </div>
                <div className="nav">
                <a href="#"><FaBrain/> Alumini Section</a>

                </div>

            </div>
            <hr/>
            <div className="sidebar__buttons">
                <NavLink to='/login'><button className="btn btn-info btn-lg login-button">Login</button></NavLink>
                <NavLink to='/register'><button className="btn btn-outline-dark btn-lg">Create Account</button></NavLink>
            </div>
            {/* <div className="sidebar__contact">
                <h4>Hey, Join our communities.</h4>
                <FaTelegram/> Telegram
                <FaDiscord/> Discord
                <FaMailBulk/> Gmail
                <FaGithub/> Source
            </div> */}
        </div>
    )
}

export default Sidebar
