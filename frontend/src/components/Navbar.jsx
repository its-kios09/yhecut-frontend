import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import search from "../assets/search_icon.png";
import profile from "../assets/profile_icon.png";
import cart from "../assets/cart_icon.png";
import menu from "../assets/menu_icon.png";
import back from "../assets/dropdown_icon.png";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative flex items-center justify-between py-5 font-medium font-josefin">
      <Link to="/">
        <img src={logo} className="w-20" alt="Logo" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-blue">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="font-josefin">HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-blue hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="font-josefin"> ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-blue hidden" />
        </NavLink>
        <NavLink to="/products" className="flex flex-col items-center gap-1">
          <p className="font-josefin">PRODUCTS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-blue hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="font-josefin">CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-blue hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img src={search} className="w-5 cursor-pointer" alt="search" />
        <div className="group relative">
          <img className="w-5 cursor-pointer" src={profile} alt="profile" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-blue rounded shadow-lg">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">LogOut</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={cart} className="w-5 min-w-5 cursor-pointer" alt="cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-blue text-black aspect-square rounded-full text-[10px]">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={menu}
          className="w-5 cursor-pointer sm:hidden"
          alt="menu"
        />
      </div>
      {/* Sidebar menu for small screen */}
      <div
        className={`fixed top-0 right-0 bottom-0 h-30 overflow-hidden bg-white transition-all duration-300 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-white">
          <div
            className="flex items-center gap-4 p-3"
            onClick={() => setVisible(false)}
          >
            <img className="h-4 rotate-180" src={back} alt="back-button" />
            <p className="text-black cursor-pointer">Back</p>
          </div>
          <div className="flex flex-col gap-5 p-5">
            <NavLink
              to="/"
              className="text-black py-2"
              onClick={() => setVisible(false)}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className="text-black py-2"
              onClick={() => setVisible(false)}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/products"
              className="text-black py-2"
              onClick={() => setVisible(false)}
            >
              PRODUCTS
            </NavLink>
            <NavLink
              to="/contact"
              className="text-black py-2"
              onClick={() => setVisible(false)}
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
