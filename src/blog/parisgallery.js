import React from 'react';
import styled from 'styled-components';
import EP1 from '../assets/EP1.jpg';
import paris3 from '../assets/paris3.jpg';
import paris2 from '../assets/paris2.jpg'



const images = [
  {
    image: EP1, 
  },
  {
    image: paris2,
  },
  {
    image: paris3,
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
 const Parisgallery = () => (
  <Container>
    {
      images.map(({ image }) => (
        <img src={image} alt="test" title="test" />
      ))
    }
  </Container>
);
export default Parisgallery