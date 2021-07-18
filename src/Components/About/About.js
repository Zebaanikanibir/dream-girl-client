import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap';
import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';
import slide3 from '../../images/slide3.jpg';

import './About.css';
const About = () => {
  return (
    <div className="about">
       
    <div className="topic mt-5">
        <div className="info mt-5">
        <h1 className="infoHead">REVIEWS</h1>
            <p className="infoText">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate placeat voluptatem ipsum blanditiis dolores provident! Totam sunt placeat voluptas, tenetur sit, eveniet, illo dicta vero iste nihil facilis sed explicabo cumque accusantium debitis. Corporis eaque libero aspernatur necessitatibus quibusdam quo quae obcaecati esse. Accusamus minima id quidem ipsa nam!
            </p>
        </div>
    <div className="reviews">
     <Carousel fade>
  <Carousel.Item>
    
    <div className="rslider mt-5">
    <div className="box0">
    <img
    style={{width:'150px', height:'150px'}}
      className="mt-5"
      src={slide1}
      alt="First slide"
    />
    </div>
    
      <div className="box1">
      <h3>ANIS MARTIN</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <h6>Model</h6>
      </div>
    </div>
    
    
  </Carousel.Item>
  <Carousel.Item>
    <div className="rslider mt-5">
    <div className="box0">
    <img
      style={{width:'150px',height:'150px'}}
      className="mt-5"
      src={slide2}
      alt="Second slide"
    />
    </div>

    
     <div className="box1">
     <h3>SITARA</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <h6>Deginer</h6>
     </div>
    </div>
    
  </Carousel.Item>
  <Carousel.Item>
  <div className="rslider mt-5">
  <div className="box0">
   <img
      style={{width:'150px',height:'150px'}}
      className="mt-5"
      src={slide3}
      alt="Third slide"
    />
   </div>

   
    <div className="box1">
    <h3>LIAS</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      <h6>Teacher</h6>
    </div>
   
  </div>
  </Carousel.Item>
</Carousel>
     </div>
    </div>

    </div>
  )
}

export default About
