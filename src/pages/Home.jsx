import React from 'react'
import './Home.css'

const skills = [
    // {
    //     id:1,
    //     icon:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zastavki.com%2Fpictures%2Foriginals%2F2014%2FPeople___Children_Cute_little_baby_girl_076031_.jpg&f=1&nofb=1',
    //     title:'Title titling about tilting axis',
    //     about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, est asperiores!'
    // }
]

function Home() {
    return (
        <div className='home__container'>
            <h5 className="home__info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsum quos, fugiat tempore libero soluta consectetur incidunt. Rem, provident minus?
            </h5>
            <div className="container home__feed-container">
                <h4 className='home__feed-title'>Latest and Greatest from SGSITS.</h4>
                
                {skills.length===0 && <div className='home__feed-placeholder'>There are no recent posts.<br/><button className="btn btn-outline-dark">View Archieves</button></div>}
                {skills.length>0 &&<div className="row">
                {
                    skills.map(({id,icon,title,about}) =>(
                        <div className="col-lg-6" key={id}>
                            <div className="skill-card">
                                <div className="post-img-container">
                                    <img src={icon} alt="post image" className='post-img' />
                                </div>
                                {title+about}
                            </div>
                        </div>
                    )   )
                }

                </div>
                }
            </div>
        </div>
    )
}

export default Home
