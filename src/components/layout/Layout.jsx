import React from "react";
import { Container } from "react-bootstrap";
import Routers from "../../routes/Routers";
import Cart from "../Cart/Cart";
import Footer from "../footer/Footer";
import Navigation from "../navbar/Navbar";
import { useSelector } from "react-redux";
const Layout = () => {
  const showCart = useSelector((state) => state.cart.cartVisible);
  return (
    <div>
      <Navigation />
      {showCart && <Cart />}
      <Container>
        <Routers />
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
