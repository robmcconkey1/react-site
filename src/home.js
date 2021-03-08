import React from 'react';
import './App.css'
import SliderHomepage from './sliderhomepage.js'
import Card from './Card.js'
import ImageGridList from './components/gridlists'
import Footer from './footer'
import TagManager from 'react-gtm-module'
import ReactGA from 'react-ga';



ReactGA.initialize('UA-175162023-1');
ReactGA.pageview(window.location.pathname + window.location.search);
 


const tagManagerArgs = {
    gtmId: 'GTM-PK5RWFL'
}
 
TagManager.initialize(tagManagerArgs)


export const Home = () => (
  <div>

<ImageGridList />

<h2 class= "intro" >
  

Enjoy the website. Please let me know if there are any images you would like to purchase...
<br/>
For enquiries please email

<a href="mailto:robmcconkeyphotos@gmail.com"> robmcconkeyphotos@gmail.com </a>

</h2>

<p> </p>


<Footer/>
 </div>
)
/* <SliderHomepage/> */