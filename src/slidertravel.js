import React, { Component } from 'react';

import {Carousel} from 'react-bootstrap'
import travelj from './japancrossing1.jpg'
import canterbury from './assets/canterbury1.jpg'
import paris from './assets/EP1.jpg'
import brooklyn from './assets/brooklyn.jpg'
import './App.css'

function SliderTravel() {
    return(
      <Carousel>
        <Carousel.Item>
          <img
            className=""
            src={canterbury}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
              src={travelj}
            alt="second slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
              src={paris}
            alt="Third slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className=""
              src={brooklyn}
            alt="second slide"
          />
          </Carousel.Item>



      </Carousel>
)
}
export default SliderTravel;
