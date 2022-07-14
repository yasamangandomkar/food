import React from "react";
import Routers from "../../routes/Routers";
import Footer from "../footer/Footer";
import Navigation from "../navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
