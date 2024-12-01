import { NavLink } from "react-router-dom";
import add from "../assets/add_icon.png"; // Ensure the path is correct
import order from "../assets/order_icon.png"; // Ensure the path is correct

const SideBar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/add"
        >
          <img src={add} className="w-5 h-5" />
          <p className="hidden md:block">Add Product</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/list"
        >
          <img src={order} className="w-5 h-5" />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/order"
        >
          <img src={order} className="w-5 h-5" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/blog"
        >
          <img src={order} className="w-5 h-5" />
          <p className="hidden md:block">Blog</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/transaction"
        >
          <img src={order} className="w-5 h-5" />
          <p className="hidden md:block">Transactions</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
