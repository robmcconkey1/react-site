import React from 'react';
import './App.css'
import SliderHomepage from './sliderhomepage.js'
import Card from './Card.js'
import ImageGridList from './components/gridlists'
import Footer from './footer'
import TagManager from 'react-gtm-module'
import ReactGA from 'react-ga';
import Payment from './payment'



ReactGA.initialize('UA-175162023-1');
ReactGA.pageview(window.location.pathname + window.location.search);
 
const tagManagerArgs = {
    gtmId: 'GTM-PK5RWFL'
}
 
TagManager.initialize(tagManagerArgs)


export const Home = () => (
<div>
    <ImageGridList />

      <payment> <Payment/> </payment>
 
        <Footer/>
 </div>

)

