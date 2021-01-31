import React from 'react';
import styled from 'styled-components';
import EP1 from '../assets/EP1.jpg'
import image12 from '../assets/travel12.jpg'
import image14 from '../assets/travel14.jpg'
import central1 from '../assets/central1.jpg'
import steam from '../assets/travel4-4.jpg'
import tophat from '../assets/resize1.1-3.jpg'
import shoreditch from '../assets/shoreditch1.jpg'

const images = [
  {
    image: EP1, 
  },
  {
    image: image14,
  },
  {
    image: image14,
  },
  {
    image: image14,
  },
  {
    image: image14,
  },
  {
    image: image14,
  },
   


];
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  object-fit: cover;
  object-position: middle;
position: relative;
margin-left:10px


  img {
    width: 100%;
    height: 300px;

    padding: 25px;


  }
  @media (min-width: 381px) {
    img {
      width: 50%;
      height: 300px;
padding: 5px;
    }
  }
  @media (min-width: 1181px) {
    img {
      width: 33%;
      height: 400px;
padding: 5px;


    }
  }
`;
 const Travelgallery = () => (
  <Container>
    {
      images.map(({ image }) => (
        <img src={image} alt="test" title="test" />
      ))
    }
  </Container>
);
export default Travelgallery