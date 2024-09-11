import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { dropdown } from "../assets/dropdown_icon.png"

const Products = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2 text-gray-600">
          FILTERS
          <img
            src={dropdown}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"print"} /> Print
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"apparel"} />{" "}
              Apparel
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"cooperate"} />{" "}
              Cooperate uniforms
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"signage"} />{" "}
              Signage
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"promo"} />
              Promo & Gift Item
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
