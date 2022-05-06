import React from "react";
import "./ServiceSlider.css";
import img from "../../Images/banner2.jpg";
import img4 from "../../Images/banner4.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const ServiceSlider = () => {
  return (
    <div className="services container">
        <h1 className="title mx-auto ">New Arrivals</h1>
      <div className="serviceSlider row  ">
        <div data-aos="zoom-in-down" className="col-lg-6 col-12 service-slider-text text-light">
        <h2>Women are like closed boxes filled with emotions</h2>
          <h3>
           A perfect fragrance can not only enhance her style but also describe her dignity and character to the outer world. The right fragrance can be the key to that closed box. Every woman should have a unique trail of fragrance that represents her soul. Also, it’s important to smell good every time you walk into a room! Choosing the perfect fragrance is through following some rules.
          </h3>
        </div>
        <div data-aos="zoom-in-down" className="col-lg-6 col-12 service-img p-0">
          <img src={img} alt="" />
        </div>
      </div>
      <h1 className="title mx-auto">New Musk Royel</h1>
      <div className="serviceSlider row container service-slider1">
        <div data-aos="zoom-in-down" className="col-md-6 service-img p-0">
          <img src={img4} alt="" />
        </div>

        <div data-aos="zoom-in-left" className="col-md-6 text-light">
            <h2>Musk- being a popular note in perfumery is often seen in the base note of perfumes.</h2>
          <h3>
            
          This note carries a soft yet deep scent that has the capability to attract people with its own charm. There was a time when Musk was derived from the gland of a species of deers. Back then, almost 40 deer glands could produce 1 kilogram of musk. And to get 40 male deers with musk, they had to kill almost 160 deers.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
