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
import SliderHome from './car'
import SliderTravel from './slidertravel'
import SliderHomepage from './sliderhomepage.js'
import SliderStreet from './sliderstreet.js'
import Card from './Card.js'



  console.log(Street)
  class App extends Component {

  render () {
    return (
      <React.Fragment>
<Layout>
      <NavigationBar/>
      <Jumbotron/>


        <BrowserRouter>
          <Switch>


            <Route exact path="/" component ={Home} />
            <Route exact path="/street" component ={Street} />
            <Route exact path="/travel" component ={Travel} />
            </Switch>

        </BrowserRouter>
  </Layout>
      </React.Fragment>
    )
  }
}



export default App;
