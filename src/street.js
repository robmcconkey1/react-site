import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import SliderStreet from './sliderstreet.js'
import Card from './Card.js'
import CardParis from './Card.js'
import CardLondon from './components/CardLondon'
import CardNYC from './components/CardNYC'
import ImageGridList from './components/gridlist'


export const Street = () => (
  <div>




<p> Hey there - welcome to the street page </p>
<SliderStreet/>

<br/>
<br/>


<CardParis />
<CardLondon />
<CardNYC />
<ImageGridList />

 </div>
)
