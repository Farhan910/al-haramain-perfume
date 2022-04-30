import React from "react";
import { Card } from "react-bootstrap";
import "./ProductsCard.css";

const ProductsCard = ({ product }) => {
  const { name, price, serviceProvider, image, description } = product;
  console.log(product);
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
          <button className="button-product">Go somewhere</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductsCard;
