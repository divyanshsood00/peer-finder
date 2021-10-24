/* eslint-disable jsx-a11y/img-redundant-alt */
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
            <h5 className="home__info text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quia ipsa minima maiores unde modi sapiente natus eum, nisi provident recusandae adipisci cupiditate reiciendis fuga in autem hic consequatur totam?
            </h5>
            <div className="container home__feed-container">
                <h4 className='home__feed-title'>Finding your peer.</h4>
                <form method="POST">
                    <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        // id="exampleInputEmail1"
                        // aria-describedby="emailHelp"
                        placeholder="Enter your Interest"
                        // value={email}
                        name="email"
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                </form>
                {skills.length===0 && <div className='home__feed-placeholder'>There are no recommended peers<br/><button className="btn btn-outline-dark">Generic Recommendations</button></div>}
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
