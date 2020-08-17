import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import image1 from './assets/1.jpg'
import image2 from './assets/resize2.1.jpg'
import image3 from './assets/travel4-4.jpg'
import image4 from './assets/resize1.jpg'
import image5 from './assets/resize2.2.jpg'
import image6 from './assets/resize3.1.jpg'
import './App.css'

function Slider() {
    return(
      <Carousel>
        <Carousel.Item>
          <img
            className=""
            src={image4}
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
              src={image5}
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
              src={image6}
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
