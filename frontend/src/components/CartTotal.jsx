import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { formatPrice } from "../utils/utils";

const CartTotal = () => {
  const { currency, delivery, getCartTotal } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"Your"} text2={"Total"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Sub total</p>
          <p>
            {currency} {formatPrice(getCartTotal())}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p>
            {currency} {formatPrice(delivery)}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}{" "}
            {formatPrice(getCartTotal() === 0 ? 0 : getCartTotal() + delivery)}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
