import React from 'react';
import styled from 'styled-components';
import nyc1 from '../assets/nyc1.jpg';
import nyc2 from '../assets/nyc2.jpg';
import nyc4 from '../assets/nyc4.jpg'



const images = [
  {
    image: nyc1, 
  },
  {
    image: nyc2,
  },
  {
    image: nyc4,
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
 const Newyorkgallery = () => (
  <Container>
    {
      images.map(({ image }) => (
        <img src={image} alt="test" title="test" />
      ))
    }
  </Container>
);
export default Newyorkgallery