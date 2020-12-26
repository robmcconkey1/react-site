import React, {Component} from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components';
import './bloggrid.css'
import nh from '../assets/nottinghill2.jpg'
import central from '../assets/central1.jpg'
import shoreditch from '../assets/shoreditch1.jpg'

/* const body = styled.div`
display: flex;
flex-wrap: wrap;
object-fit: cover;
object-position: middle;
position: center;
`
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

  export default function London() {
    return (
        <div>
        <h1>London</h1>
            <div className = 'grid'>
          <Bloggrid name="Notting Hill" intro= "A colourful tour of West London's houses" imageSource={nh}/>
          <Bloggrid name="Central" intro= "The heart of the city" imageSource={central}/>
          <Bloggrid name="Shoreditch" intro= "A tour of London's urban side" imageSource={shoreditch}/>
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


