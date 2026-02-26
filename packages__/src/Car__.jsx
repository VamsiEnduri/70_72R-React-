import React from 'react'
import {Carousel} from "react-bootstrap"
const Car__ = () => {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img 
        width="100%"
        height="80%"
        src='https://img.freepik.com/free-photo/mixed-fruits-with-apple-banana-orange-other_74190-938.jpg'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://img.freepik.com/free-photo/mixed-fruits-with-apple-banana-orange-other_74190-938.jpg'/>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://img.freepik.com/free-photo/mixed-fruits-with-apple-banana-orange-other_74190-938.jpg'/>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Car__