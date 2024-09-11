import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

const LastestProducts = () => {
  const { products } = useContext(ShopContext);
  const [lastestProducts, setLastestProducts] = useState([]);

  useEffect(() => {
    setLastestProducts(products.slice(0, 5));
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Lastest"} text2={"Products"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          We offer top quality print & branding solutions both for corporate &
          individuals. Based in Nairobi Kenya we have been in business for the
          past five years. We offer solutions ranging from T-shirts ,polos,
          hoodies, jerseys, branded corporate merchandize, indoor & outdoor
          signage, 3D & 2D signage installation.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {lastestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LastestProducts;
