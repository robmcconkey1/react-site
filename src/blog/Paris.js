import React, {Component} from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components';
import './bloggrid.css'
import nh from '../assets/nottinghill2.jpg'
import central from '../assets/central1.jpg'
import shoreditch from '../assets/shoreditch1.jpg'
import Parisgallery from './parisgallery';

/*
First is the function that calls the images 
*/

function Bloggrid(props) {
    console.log(props)
    return (
        <div class= 'card'>
    <h1>{props.name}</h1> <br/><br/>
    {props.intro}
    <img className = 'blogimage' src= {props.imageSource}/>
    <button className= ".card Button"> Find out more</button>
    
        </div>
    )
  }

  /*
Second is the function that contains the body etc. 
*/


  export default function Paris() {
    return (
        <div>
        <h1>Paris</h1>

            <p className= 'blogparagraph'> I've only had the pleasure of visiting this amazing city once. Of course, I enjoyed the usual touristy sites - let's hope 2021 will provide more opportunities to visit again </p>

                <div className= ''><Parisgallery/> </div> 

            <div className = 'grid'>
            
          </div>
       </div>
    )}

/*
function London() {
    return (
        <div> <h1> London </h1>
        <div className = 'grid'>
            
            <h3> Notting Hill </h3>
            <h3> Central </h3>
            <h3> Shoreditch </h3>
        </div>
        </div>
    )
*/