import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import SliderStreet from './sliderstreet.js'
import Card from './Card.js'
import CardParis from './Card.js'
import CardLondon from './components/CardLondon'
import CardNYC from './components/CardNYC'
import ImageGridList from './components/gridlists'
import FullWidthGrid from './components/grid'


export const Street = () => (
  <div>
<br/><br/><br/><br/><br/>
<FullWidthGrid />
<br/><br/><br/><br/>

<ImageGridList />
<br/>
<br/>

 </div>
)
