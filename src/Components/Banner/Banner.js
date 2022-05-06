import React from "react";
import "./Banner.css";
import banner2 from "../../Images/banner8.jpg";
import banner4 from "../../Images/banner9.jpg";
import banner5 from "../../Images/banner10.jpg";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
     
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-container"
            src={banner4}
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner5}
            alt="Second slide"
          />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Third slide"
          />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
