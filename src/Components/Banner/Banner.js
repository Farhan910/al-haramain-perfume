import React from 'react';
import './Banner.css'
import banner from '../../Images/banner2.jpg';

const Banner = () => {
    return (
        <div>
            <h1 className="banner-text text-white">Hello this is haramain shop , <br/> welcome to our shop</h1>
            <img className="img-container" src={banner} alt="" />
        </div>
    );
};

export default Banner;