import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageHover = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === image.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Link className="text-blue-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out w-full"
          src={image[currentImageIndex]}
          alt={name}
          onMouseEnter={handleImageHover}
        />
      </div>
      <div className="flex justify-between items-center pt-3 pb-1 text-md">
        <p>{name}</p>
        <p className="text-sm font-bold text-red">
          {currency} {price}
        </p>
      </div>
      <button className="bg-red text-white px-4 py-3 text-sm active:bg-gray-700 w-full text-center mt-3">
        Buy now
      </button>
    </Link>
  );
};

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductItem;
