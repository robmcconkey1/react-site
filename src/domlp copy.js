import React from 'react';
import styled from 'styled-components';
import image4 from './assets/resize1.jpg'
import image12 from './assets/travel12.jpg'

const images = [
  {
    image: image4,
  }
   


];
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  object-fit: cover;
  object-position: middle;
position: relative;


  img {
    width: 100%;
    height: 300px;

    padding: 5px;


  }
  @media (min-width: 581px) {
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
 const Imagelayout = () => (
  <Container>
    {
      images.map(({ image }) => (
        <img src={image} alt="test" title="test" />
      ))
    }
  </Container>
);
export default Imagelayout