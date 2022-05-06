import React from "react";
import Banner from "../Banner/Banner";
import "./Home.css";
import useProducts from "../Hooks/Hooks";
import ProductsCard from "../ProductsCard/ProductsCard";
import Selles from "../Selles/Selles";
import ServiceSlider from "../ServiceSlider/ServiceSlider";
import { useNavigate } from "react-router-dom";
import Address from "../Address/Address";

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
      <h1 className="title-product mx-auto">Products</h1>
      <div className="products-card container">
        {products.slice(0, 6).map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
     <div className="text-center">
     <button className="btn btn-light shadow-none btn-color mt-5 " onClick={handleProducts}>
        Manage products
      </button>

     </div>
      <Selles />

      <Address/>
    </div>
  );
};

export default Home;
