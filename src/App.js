import React  from "react";
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>

        <button><Link to="/">Go homr</Link></button>

        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/contacts">
              <Contacts/>
          </Route>
          <Route path="/about">
              <About/>
          </Route>
        </Switch>

        
      </div>
    </Router>
  )
}


function Home(){
  return <h1>Home</h1>
}

function Contacts(){
  return <h1>Contacts</h1>
}

function About(){
  return <h1>About</h1>
}

