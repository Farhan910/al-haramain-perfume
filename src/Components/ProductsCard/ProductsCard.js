import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ProductsCard.css";

const ProductsCard = ({ product }) => {
  const { id, name, price, serviceProvider, image, description } = product;
  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="cards"
    >
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <img className="card-images" src={image} alt={image} />
          <div className="card-text">
            <div className="">
              <span className="text-danger "> ৳: </span>
              {price}
              <h3>{name}</h3>
            </div>
            <p className="supplier">Supplier: {serviceProvider}</p>
            <p> {description}</p>
          </div>
          <button
            onClick={() => handleProductClick(id)}
            className="button-product-card"
          >
            Go somewhere
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductsCard;
