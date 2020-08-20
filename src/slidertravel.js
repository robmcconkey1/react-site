import React, { Component } from 'react';

import {Carousel} from 'react-bootstrap'
import travelj from './japancrossing1.jpg'
import './App.css'

function SliderTravel() {
    return(
      <Carousel>
        <Carousel.Item>
          <img
            className=""
            src={travelj}
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
              src={travelj}
            alt="Third slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
)
}
export default SliderTravel;
