import React from "react";
import Carousel from "../../components/carousel/Carousel";
import ProductList from "../../components/product/ProductList";

const Pizza = () => {
  return (
    <>
      <Carousel />
      <ProductList type={1} />
    </>
  );
};

export default Pizza;
