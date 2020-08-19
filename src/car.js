import React, { Component } from 'react';

import {Carousel} from 'react-bootstrap'
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

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
              src={image5}
            alt="second slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
              src={image6}
            alt="Third slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
)
}
export default Slider;
