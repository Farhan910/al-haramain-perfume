import React from "react";
import { useParams } from "react-router-dom";
import useProducts from "../Hooks/Hooks";

const ProductDetail = () => {
  const { productId } = useParams();
  const [products] = useProducts();

  const productDetail = products?.find((product) => product.id=== productId);
  console.log(productDetail);
 
  
  

  //  console.log(productDetail[0]);
  //  const {name, description} = productDetail[0];

  return (
    <div>
      <h2>{productDetail?.name}</h2>
      <h2>{productDetail?.id}</h2>
      <h2>{productDetail?.description}</h2>
    </div>
  );
};

export default ProductDetail;
