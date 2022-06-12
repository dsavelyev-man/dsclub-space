import React from "react";
import Carousel from "../../components/carousel/Carousel";

const Pizza = () => {
  return (
    <>
      <Carousel />
      <div
        className="pizza"
        style={{
          height: "500vh",
        }}
      ></div>
    </>
  );
};

export default Pizza;
