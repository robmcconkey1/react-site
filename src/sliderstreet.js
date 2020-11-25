import React, { Component } from 'react';

import {Carousel} from 'react-bootstrap'
import dublin from './assets/resize2.2.jpg'
import image6 from './assets/resize3.1.jpg'
import paris from './assets/EP1.jpg'
import stpan from './assets/travel14.jpg'
import soho from './assets/travel4-4.jpg'
import './App.css'

function SliderStreet() {
    return(
      <Carousel>
        <Carousel.Item>
          <img
            className="street"
            src={paris}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="street"
              src={dublin}
            alt="second slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="street"
              src={image6}
            alt="Third slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="street"
            src={stpan}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="street"
            src={soho}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
)
}
export default SliderStreet;
