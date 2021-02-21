import React from 'react';
import styled from 'styled-components';
import EP1 from '../assets/EP1.jpg'
import image12 from '../assets/travel12.jpg'
import image14 from '../assets/travel14.jpg'
import nyc1 from '../assets/nyc1.jpg';
import nyc2 from '../assets/nyc2.jpg';
import nyc4 from '../assets/nyc4.jpg'
import vietnam from '../assets/vietnam.png'
import italy from '../assets/italy.png'
import edin from '../assets/edin1.png'
import canterbury1 from '../assets/canterbury1.jpg'


const images = [
  {
    image: EP1, 
  },
  {
    image: nyc1,
  },
  {
    image: vietnam,
  },
  {
    image: image14,
  },
  {
    image: image12,
  },
  {
    image: nyc4,
  },
  {
    image: italy,
  },
  {
    image: edin,
  },
  {
    image: canterbury1,
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