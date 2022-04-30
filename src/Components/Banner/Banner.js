import React from "react";
import "./Banner.css";
import banner2 from "../../Images/banner2.jpg";
import banner4 from "../../Images/banner4.jpg";
import banner5 from "../../Images/banner5.jpg";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      {/* <h1 className="banner-text text-white">Hello this is haramain shop , <br/> welcome to our shop</h1>
            <img className="img-container" src={banner} alt="" /> */}

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-container"
            src={banner4}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner5}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
