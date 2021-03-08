import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import './blog/bloggrid.css'
import Bloggallery from './blog/bloggallery';
import Travelgallery from './components/travelgallery';
import TagManager from 'react-gtm-module'
import ReactGA from 'react-ga';

ReactGA.initialize('UA-175162023-1');
ReactGA.pageview(window.location.pathname + window.location.search);


function Bloggrid(props) {
    console.log(props)
    return (
        <div class= 'card'>
    <h1>{props.name}</h1> 
    {props.intro}
    <img className = 'blogimage' src= {props.imageSource}/>
    <button className= ".card Button"> Find out more</button>
    
        </div>
    )
  }

  export function Travel() {
    return (
        <div>
        <h1>Travel </h1>

            <p className= 'blogparagraph'>Enjoy the collection of travel shots taken over the past few years </p>

                <div className= ''><Travelgallery/> </div> 

            <div className = 'grid'>
            
        
          </div>
       </div>
    )}


