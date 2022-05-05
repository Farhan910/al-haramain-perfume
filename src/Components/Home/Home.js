import React from "react";
import Banner from "../Banner/Banner";
import "./Home.css";
import useProducts from "../Hooks/Hooks";
import ProductsCard from "../ProductsCard/ProductsCard";
import Selles from "../Selles/Selles";
import ServiceSlider from "../ServiceSlider/ServiceSlider";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products] = useProducts();
  const navigate = useNavigate();
  const handleProducts = () => {
    navigate("/products");
  };
  return (
    <div className="home">
      <Banner />
      <ServiceSlider />
      <div className="products-card container">
        {products.slice(0, 6).map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
      <button className="manage-button mt-5" onClick={handleProducts}>
        Manage products
      </button>
      <Selles />
    </div>
  );
};

export default Home;
