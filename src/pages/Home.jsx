import React from "react";
import Category from "../components/Category/Category";
import Header from "../components/Header/Header";
import ProductFood from "../components/ProductFood/ProductFood";
import Services from "../components/Services/Services";
import Tasty from "../components/Location/Location";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <Category />
      <Services />
      <ProductFood />
      <Tasty />
      <Testimonial />
    </div>
  );
};

export default Home;
