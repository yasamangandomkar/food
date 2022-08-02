import { Routes, Route } from "react-router-dom";

import Cart from "../pages/Cart/Cart";

import Home from "../pages/Home.jsx";
import Foods from "../pages/Foods/Foods";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />

      <Route path="foods" element={<Foods />} />
      <Route path="foods/:id" element={<FoodDetails />} />
    </Routes>
  );
};

export default Routers;
