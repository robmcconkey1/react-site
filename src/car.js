import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import image1 from './assets/1.jpg'
import image2 from './assets/resize2.1.jpg'
import image3 from './assets/travel4-4.jpg'
import './App.css'

function Slider() {
    return(
      <Carousel>
        <Carousel.Item>
          <img
            className=""
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
              src={image2}
            alt="second slide"
          />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
              src={image3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
)
}
export default Slider;
