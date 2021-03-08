import React, {Component} from 'react';
import Slideshow from './components/slideshow'
import WelcomeCopy from './components/robintro'
import './App.css'
import {Layout} from './components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavigationBar} from './components/navigationbar.js'
import {Home} from './home'
import {Street} from './street'
import {Travel} from './travel.js'
import {Store} from './store'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Jumbotron} from './components/jumbotron'
import SliderHome from './car'
import SliderTravel from './slidertravel'
import SliderHomepage from './sliderhomepage.js'
import SliderStreet from './sliderstreet.js'
import Newyork from './blog/Newyork.js'
import London from './blog/London.js'
import Paris from './blog/Paris.js'
import Payment from './payment'
import ContactUs from './sendpayment'
import Router from 'react-router'
import TagManager from 'react-gtm-module'
import ReactGA from 'react-ga';




  console.log(Street)
  class App extends Component 

{
  
  
   
  render () {
    ReactGA.initialize('UA-175162023-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  const tagManagerArgs = {
    gtmId: 'GTM-PK5RWFL',
    dataLayer: {
      userId: '001',
      userProject: 'project',
      
  }
}

TagManager.initialize(tagManagerArgs)

    return (
      <React.Fragment>

        

      <NavigationBar/>
      <Jumbotron/>


        <BrowserRouter>
          <Switch>
            <Route exact path="/" component ={Home} />
            <Route exact path="/street" component ={Street} />
            <Route exact path="/travel" component ={Travel} />
            <Route exact path="/store" component ={ Store } />
            <Route exact path="/blog/Newyork" component ={Newyork} />
            <Route exact path="/blog/London" component ={London} />
            <Route exact path="/blog/Paris" component ={Paris} />
            <Route exact path="/sendpayment" component ={ContactUs} />
            </Switch>

        </BrowserRouter>

      </React.Fragment>
    )
  }
}



export default App;
