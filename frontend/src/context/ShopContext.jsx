import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "Ksh";
  const delivery = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select product size", {
        style: {
          fontFamily: '"Josefin Sans", sans-serif',
        },
      });
      return;
    }

    let cartData = structuredClone(cartItems);
    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    if (cartData[itemId][size]) {
      cartData[itemId][size] += 1;
    } else {
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        try {
          if (cartItems[itemId][size] > 0) {
            totalCount += cartItems[itemId][size];
          }
        } catch (error) {
           toast.error(`Error counting the items: ${error}`, {
             style: {
               fontFamily: '"Josefin Sans", sans-serif',
             },
           });
        }
      }
    }

    return totalCount;
  };

const updateQuantity = (itemId, size, quantity) => {
  let cartData = structuredClone(cartItems);

  if (quantity === 0) {
    delete cartData[itemId][size];
    if (Object.keys(cartData[itemId]).length === 0) {
      delete cartData[itemId];
    }
  } else {
    cartData[itemId][size] = quantity;
  }

  setCartItems(cartData);
};

const getCartTotal = () => {
  let totalAmount = 0;
  for(const items in cartItems){
    let iteminfo = products.find((product) => product._id === items);
    for(const item in cartItems[items]){
      try {
        if(cartItems[items][item] > 0){
          totalAmount += iteminfo.price * cartItems[items][item];
        }
      } catch (error) {
        toast.error(`Error getting total amount of the items: ${error}`, {
          style: {
            fontFamily: '"Josefin Sans", sans-serif',
          },
        });
      }
    }
  }
  return totalAmount;
}

  const value = {
    products,
    currency,
    delivery,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    getCartTotal,
    navigate,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
