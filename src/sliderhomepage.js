import React, { Component } from 'react';

import {Carousel} from 'react-bootstrap'
import image4 from './assets/resize1.jpg'
import image5 from './assets/resize2.2.jpg'
import image6 from './assets/resize3.1.jpg'
import image12 from './assets/travel12.jpg'
import strand from './assets/resize1.1-3.jpg'
import './App.css'

function SliderHomepage() {
    return(
      <Carousel>
        <Carousel.Item>
          <img
            className="slide"
            src={image4}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slide"
              src={image5}
            alt="second slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slide"
              src={image6}
            alt="Third slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="slide"
            src={image12}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img
            className="slide"
            src={strand}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
)
}
export default SliderHomepage;
