import React, {Component} from 'react';
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
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Jumbotron} from './components/jumbotron'
import Slider from './car'





  console.log(Street)
  class App extends Component {

  render () {
    return (
      <React.Fragment>
<Layout>
      <NavigationBar/>
      <Jumbotron/>

<Slider/>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component ={Home} />
            <Route path="/street" component ={Street} />
            <Route path="/travel" component ={Travel} />
            </Switch>

        </BrowserRouter>
  </Layout>
      </React.Fragment>
    )
  }
}



export default App;