import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "./assets/logo.svg";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Banner />
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <FloatingWhatsApp
        phoneNumber="+254791660287"
        accountName="YheCut Media Ltd"
        allowEsc
        allowClickAway
        avatar={logo}
        notification
        notificationSound
        darkMode
      />
      <Footer />
    </div>
  );
};

export default App;
