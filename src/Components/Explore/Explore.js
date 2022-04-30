import useProducts from "../Hooks/Hooks";
import ProductsCard from "../ProductsCard/ProductsCard";

const Explore = () => {
  const [products] = useProducts();
  console.log(products);
  
  return (
      <div>
            <button onClick="">Click here </button>
          
          <div className="products-card container">
            {products.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      );


  
};

export default Explore;
