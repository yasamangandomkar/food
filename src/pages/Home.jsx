import React from "react";
import Category from "../components/Category/Category";
import Header from "../components/Header/Header";
import ProductFood from "../components/ProductFood/ProductFood";
import Services from "../components/Services/Services";
import products from "../assets/fake-data/Products";
const Home = () => {
  return (
    <div>
      <Header />
      <Category />
      <Services />
      <ProductFood products={products} />
    </div>
  );
};

export default Home;
