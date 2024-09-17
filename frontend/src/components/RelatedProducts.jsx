import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // Importing PropTypes
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { formatPrice } from "../utils/utils";

const RelatedProducts = ({ category }) => {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const filteredProducts = products.filter(
        (item) => category === item.category
      );
      setRelatedProducts(filteredProducts.slice(0, 5));
    }
  }, [products, category]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"Related"} text2={"Products"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {relatedProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={formatPrice(item.price)}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

RelatedProducts.propTypes = {
  category: PropTypes.string.isRequired,
};

export default RelatedProducts;
