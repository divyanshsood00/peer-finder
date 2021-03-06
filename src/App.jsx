import React,{useState,useEffect} from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home'
import Courses from './pages/Courses'
import Notes from './pages/Notes'
import Landing from './pages/landing';
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import User from './pages/User';
import Technical from './pages/Technical';
import NonTechnical from './pages/NonTechnical';
import Cultural from './pages/Cultural';

function App() {
  const [active,setActive] = useState(false)
  let currentURL = window.location.href

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    currentURL = window.location.href;
    if (currentURL.endsWith('/home'))
            setActive(true);
  }, [currentURL,active])
  const homeHandler = ()=>{
    
setActive('/home')
  }
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container-main">
          <div className="row">
            {/* {active && <div className="col-lg-3 col-md-4">
              <div className="app__sidebar">
                <Switch>
                  <Route path='home'>
                    <Sidebar/>              
                  </Route>
                </Switch>
              </div>
            </div>} */}
            <Switch>
                  <Route path='/home'>
                    <div className="col-lg-3 col-md-4">
                      <div className="app__sidebar">
                        <Sidebar/>              
                      </div>
                    </div>
                  </Route>
            </Switch>
            <div className="col">
              <div className="app__main-content">
              <Navbar navHandler={homeHandler}/>
              <Switch>
                <Route path='/' exact>
                  <Landing/>
                </Route>
                <Route path='/home/technical'>
                  <Technical />
                </Route>
                <Route path='/home/non-technical'>
                  <NonTechnical />
                </Route>
                <Route path='/home/cultural'>
                  <Cultural />
                </Route>
                <Route path='/home'>
                  <Home/>
                </Route>
                <Route path='/courses'>
                  <Courses/>
                </Route>
                <Route path='/contact'>
                  <Contact/>
                </Route>
                <Route path='/notes'>
                  <Notes/>
                </Route>
                <Route path='/profile'>
                  <Profile/>
                </Route>
                <Route path='/login'>
                  <Login navHandler={homeHandler}/>
                </Route>
                <Route path='/register'>
                  <Register />
                </Route>
                <Route path='/user'>
                  <User />
                </Route>
                
                <Route path = '/contactus'>
                  <Contact/>
                </Route>
                <Route>
                  <Redirect to='/'/>
                </Route>
              </Switch>
              </div>
            </div>

            {/* {active && <div className="col-lg-9 col-md-8">
              <div className="app__main-content">
              <Navbar navHandler={homeHandler}/>
              <Switch>
                <Route path='/' exact>
                  <Landing/>
                </Route>
                <Route path='/home'>
                  <Home/>
                </Route>
                <Route path='/courses'>
                  <Courses/>
                </Route>
                <Route path='/contact'>
                  <Contact/>
                </Route>
                <Route path='/notes'>
                  <Notes/>
                </Route>
                <Route path='/profile'>
                  <Profile/>
                </Route>
                <Route path='/login'>
                  <Login navHandler={homeHandler}/>
                </Route>
                <Route path='/register'>
                  <Register />
                </Route>
                <Route>
                  <Redirect to='/'/>
                </Route>
              </Switch>
              </div>
            </div>}
            {!active && <div className="col">
              <div className="app__main-content">
              <Navbar navHandler={homeHandler} />
              <Switch>
                <Route path='/' exact>
                  <Landing/>
                </Route>
                <Route path='/home'>
                  <Home/>
                </Route>
                <Route path='/courses'>
                  <Courses/>
                </Route>
                <Route path='/notes'>
                  <Notes/>
                </Route>
                <Route path='/contact'>
                  <Contact/>
                </Route>
                <Route path='/profile'>
                  <Profile/>
                </Route>
                <Route path='/login'>
                  <Login navHandler={homeHandler}/>
                </Route>
                <Route path='/register'>
                  <Register/>
                </Route>
                <Route>
                  <Redirect to='/'/>
                </Route>
              </Switch>
              </div>
            </div>} */}
          </div>
        </div>
      </BrowserRouter>
      </div>
  );
}

export default App;
