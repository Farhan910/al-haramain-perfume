import React from "react";
import Banner from "../Banner/Banner";
import './Home.css'
import useProducts from "../Hooks/Hooks";
import Products from "../Products/Products";
import ProductsCard from "../ProductsCard/ProductsCard";
import Selles from "../Selles/Selles";
import ServiceSlider from "../ServiceSlider/ServiceSlider";

const Home = () => {
  const [products] = useProducts()
  return (
    <div className="home">
      <Banner />
      <ServiceSlider />
      <div className="products-card container">
        {products.slice(0, 6).map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
      <Selles/>

   
      
    </div>
  );
};

export default Home;
