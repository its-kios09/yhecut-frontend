import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { formatPrice } from '../utils/utils';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const bestProduct = products.filter((item) => item.bestseller);
      setBestSeller(bestProduct.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="Best" text2="Sellers" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          We will solve your problem, beat your deadline and fit into your
          budget.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem key={index} id={item._item} name={item.name} image={item.image} price={formatPrice(item.price)}/>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
