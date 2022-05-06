import useProducts from "../Hooks/Hooks";
import ProductsCard from "../ProductsCard/ProductsCard";
import image from '../../Images//bg2.jpg'
import "./Products.css";

const Products = () => {
  const [products] = useProducts();

  return (
    <div className="product ">
      <h2 className="text-light product-title">This is Al Haramain Store</h2>
      <img className="w-100 product-banner" src={image} alt="" />
      <div className="products-card container">
      
      
        {products.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
        
      </div>
    </div>
  );
};

export default Products;
