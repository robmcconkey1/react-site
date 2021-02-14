import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import './blog/bloggrid.css'
import Bloggallery from './blog/bloggallery';
import Travelgallery from './components/travelgallery';
import Parisgallery from './blog/parisgallery';
import nh from './assets/nottinghill2.jpg'
import central from './assets/central1.jpg'
import shoreditch from './assets/shoreditch1.jpg'


function Bloggrid(props) {
  console.log(props)
  return (
      <div class= 'card'>
  <h1>{props.name}</h1> <br/><br/>
  {props.intro}
  <img className = 'blogimage' src= {props.imageSource}/>
  <a href='/sendpayment' className= ".card Button"> Buy now </a>
  
      </div>
  )
}

export function Store() {
  return (
    <div className= 'blogparagraph' >
      <h1>Store</h1>
      <p>All photos are signed and sent within 5 days </p>
      
      <div className = 'grid'>
            
            <Bloggrid name="£29" intro= "" imageSource={nh}/>
            <Bloggrid name="Central" intro= "" imageSource={central}/>
            <Bloggrid name="Shoreditch" intro= "" imageSource={shoreditch}/>
            </div>

    </div>
     


  )}
