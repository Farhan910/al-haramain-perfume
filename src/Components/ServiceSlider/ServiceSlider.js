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
    <div className="services">
      <div className="serviceSlider row container ">
        <div data-aos="zoom-in-down" className="col-md-6 ">
        <h2>Since 1970, it has always been and will always be about quality.</h2>
          <h3>
            We’re passionate about finding and refining the best Agarwood and
            distilling it with obsessive care to get the finest Dehnal Oudh. Our
            passion for Oudh is only rivaled by our love of sharing it.
          </h3>
        </div>
        <div data-aos="zoom-in-down" className="col-md-6 service-img p-0">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="serviceSlider row container ">
        <div data-aos="zoom-in-down" className="col-md-6 service-img p-0">
          <img src={img4} alt="" />
        </div>

        <div data-aos="zoom-in-left" className="col-md-6 ">
            <h2>Since 1970, it has always been and will always be about quality.</h2>
          <h3>
            
            We’re passionate about finding and refining the best Agarwood and
            distilling it with obsessive care to get the finest Dehnal Oudh. Our
            passion for Oudh is only rivaled by our love of sharing it.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
