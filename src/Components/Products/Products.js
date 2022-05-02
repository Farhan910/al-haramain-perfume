import Explore from "../Explore/Explore";
import useProducts from "../Hooks/Hooks";
import ProductsCard from "../ProductsCard/ProductsCard";
import "./Products.css";

const Products = () => {
  const [products] = useProducts();

  return (
    <div className="product">
      <div className="products-card container">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
