import logo from "../assets/logo.svg";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const Navbar = ({ setToken }) => {
  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    toast.success("You have successfully logged out");
  };

  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img src={logo} className="w-20" alt="Logo" />
      <button
        onClick={handleLogout}
        className="bg-red text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

Navbar.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Navbar;
