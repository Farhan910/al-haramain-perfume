import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProducts from "../Hooks/Hooks";
import "./ProductDetail.css";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(0);
  const  {id}  = useParams();
  console.log(id);
  
  const [products] = useProducts();
  const navigate = useNavigate();

  const handleProducts = () => {
    navigate("/products");
  }

  const productDetail = products?.find((product) =>product._id===id);
  

  const handleDecreseQuantity = () => {
    if (quantity > 1 ) {
     const final = quantity - 1;
      setQuantity(final)
      console.log(final);
    }
   
  };

  //  console.log(productDetail[0]);
  //  const {name, description} = productDetail[0];

  return (
    <div>
      <div className="row ms-5 m-0">
        <div className="col-lg-4">
          <img
            className="detail-card-images"
            src={productDetail?.image}
            alt=""
          />
        </div>
        <div className="detail-card-text col-lg-4 m-auto">
          <div className="">
            <span className="text-danger "> ৳: </span>
            {productDetail?.price}
            <h3>{productDetail?.name}</h3>
          </div>
          <p className="supplier">Supplier: {productDetail?.serviceProvider}</p>
          <p> {productDetail?.mainDescription}</p>
          <p> Quantity: {productDetail?.quantity}</p>
          <button
            onClick={() => handleDecreseQuantity()}
            className="button-manage"
          >
            Delivered
          </button>
        </div>

       
      </div>
      <button className="manage-button" onClick={handleProducts}>Manage products</button>
    </div>
  );
};

export default ProductDetail;
