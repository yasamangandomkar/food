import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";

import Cart from "../pages/Cart.jsx";
import Contact from "../pages/Contact.jsx";
import Home from "../pages/Home.jsx";
import Foods from "../pages/Foods.jsx";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="contact" element={<Contact />} />
      <Route path="foods" element={<Foods />} />
    </Routes>
  );
};

export default Routers;
