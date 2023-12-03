import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getTokenFromLocalStorage } from "../utils/axiosConfig";

const Layout = () => {
  const token = getTokenFromLocalStorage?.token;
  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    if (token !== undefined) {
      setLogin(true);
    }
  }, [token]);
  return (
    <>
      <Header isLogin={isLogin} />
      <Outlet />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
};

export default Layout;
