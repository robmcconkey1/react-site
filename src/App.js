import React, {Component} from 'react';
import Navbars from './components/navbar';
import Slideshow from './components/slideshow'
import WelcomeCopy from './components/robintro'
import './App.css'
import {Layout} from './components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavigationBar} from './components/navigationbar.js'
import {Home} from './home'
import {Street} from './street'
import {Travel} from './travel'
import {Weddings} from './weddings'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Jumbotron} from './components/jumbotron'
import Example from './alert'
import Slider from './car'




class App extends Component {
  render () {
    return (
      <React.Fragment>
      <NavigationBar/>
      <Jumbotron/>
<Example/>
<Slider/>
        <Router>
          <Switch>
            <Route exact path="/" component ={Home} />
            <Route exact path="/street" component ={Street} />
            <Route exact path="/travel" component ={Travel} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}


export default App;
