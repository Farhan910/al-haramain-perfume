import Explore from "../Explore/Explore";
import useProducts from "../Hooks/Hooks";
import ProductsCard from "../ProductsCard/ProductsCard";
import "./Products.css";

const Products = () => {
  const [products] = useProducts();
  

  return (
    <div>
      <div className="products-card container">
        {products.slice(0, 6).map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>

        <Explore/>
      
      
    </div>
  );
};

export default Products;
