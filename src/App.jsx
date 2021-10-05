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

function App() {
  const [active,setActive] = useState(false)
  let currentURL = window.location.href

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    currentURL = window.location.href;
    if (currentURL.endsWith('/home'))
            setActive(true);
  }, [currentURL])
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container-main">
          <div className="row">
            {active && <div className="col-lg-3 col-md-4">
              <div className="app__sidebar">
                <Sidebar/>              
              </div>
            </div>}

            {active && <div className="col-lg-9 col-md-8">
              <div className="app__main-content">
              <Navbar />
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
                <Route path='/login'>
                  <Login/>
                </Route>
                <Route path='/register'>
                  <Register/>
                </Route>
                <Route>
                  <Redirect to='/'/>
                </Route>
              </Switch>
              </div>
            </div>}
            {!active && <div className="col">
              <div className="app__main-content">
              <Navbar />
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
                <Route path='/login'>
                  <Login/>
                </Route>
                <Route path='/register'>
                  <Register/>
                </Route>
                <Route>
                  <Redirect to='/'/>
                </Route>
              </Switch>
              </div>
            </div>}
          </div>
        </div>
      </BrowserRouter>
      </div>
  );
}

export default App;
