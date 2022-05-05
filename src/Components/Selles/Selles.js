import React from 'react';
import './Selles.css'
import CountUp from 'react-countup';

const Selles = () => {
    return (
        <div className="mt-5">
            <h2 className="selles-text container ">Our Soled Reports</h2>
            <div  className="text-center counting-products  ">
            <span data-aos="fade-up" className="counting-text">Perfumes :  <CountUp end={1260} /> <br/> Peaces </span>
            <span data-aos="fade-up"className="counting-text">For Women's :  <CountUp end={2000} /> <br/> Peaces</span>
            <span data-aos="fade-up"className="counting-text">For men's :  <CountUp end={980} /> <br/> Peaces</span>
            <span data-aos="fade-up"className="counting-text">For others :  <CountUp end={690} /> <br/> Peaces</span>
           
            </div>
            
            
        </div>
    );
};

export default Selles;