import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import './blog/bloggrid.css'
import Bloggallery from './blog/bloggallery';
import Travelgallery from './components/travelgallery';



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

  export function Travel() {
    return (
        <div>
        <h1>Travel</h1>

            <p className= 'blogparagraph'>Enjoy the collection of travel shots taken over the past few years </p>

                <div className= ''><Travelgallery/> </div> 

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


