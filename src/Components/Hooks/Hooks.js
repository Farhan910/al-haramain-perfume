import { useEffect, useState } from "react";


const useProducts = (refresh) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://salty-atoll-21303.herokuapp.com/product")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  },[refresh]);
  return [products, setProducts];
};

export default useProducts;
