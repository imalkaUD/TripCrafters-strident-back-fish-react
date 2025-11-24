import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Destinations from './views/destinations'
import Tours from './views/tours'
import HowItWorks from './views/how-it-works'
import About from './views/about'
import Contact from './views/contact'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Destinations} exact path="/destinations" />
        <Route component={Destinations} exact path="/destinations/:id" />
        <Route component={Tours} exact path="/tours" />
        <Route component={Tours} exact path="/tours/:id" />
        <Route component={HowItWorks} exact path="/how-it-works" />
        <Route component={About} exact path="/about" />
        <Route component={Contact} exact path="/contact" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
