import { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import lipaNaMpesa from "../assets/lipaNaMpesa.png";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cash");
  const { navigate } = useContext(ShopContext)

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"Delivery"} text2={"Information"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Zip code"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="phone"
          placeholder="Phone number"
        />
      </div>
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"Payment"} text2={"Method"} />
          <div className="flex items-center justify-between gap-3">
            <div
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              style={{ height: "88px" }}
              onClick={() => setMethod("lipaNaMpesa")}
            >
              <div
                className={`w-4 h-4 border rounded-full flex items-center justify-center ${
                  method === "lipaNaMpesa" ? "bg-green-400" : ""
                }`}
              >
                {method === "lipaNaMpesa" && (
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                )}
              </div>
              <img
                className="h-20 mx-4"
                src={lipaNaMpesa}
                alt="Lipa Na Mpesa"
              />
            </div>
            <div
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              style={{ height: "88px" }}
              onClick={() => setMethod("cash")}
            >
              <div
                className={`w-4 h-4 border rounded-full flex items-center justify-center ${
                  method === "cash" ? "bg-green-400" : ""
                }`}
              >
                {method === "cash" && (
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                )}
              </div>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              className="bg-red text-white text-sm px-16 py-3"
              onClick={()=>navigate('/orders')}
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
