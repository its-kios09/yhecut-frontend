import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar.jsx";
import SideBar from "./components/SideBar.jsx";
import Add from "./pages/Add.jsx";
import List from "./pages/List.jsx";
import Order from "./pages/Order.jsx";
import Blog from "./pages/Blog.jsx";
import { useState } from "react";
import Login from "./components/Login.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Transaction from "./pages/Transaction.jsx";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "Ksh";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useState(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className="flex w-full">
            <SideBar />
            <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/order" element={<Order token={token} />} />
                <Route path="/blog" element={<Blog token={token} />} />
                <Route
                  path="/transaction"
                  element={<Transaction token={token} />}
                />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
