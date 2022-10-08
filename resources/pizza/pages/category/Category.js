import React from "react";
import { useParams } from "react-router-dom";
import ProductList from "../../components/product/ProductList";

const Category = () => {
  const { category } = useParams();

  let categoryId;

  switch (category) {
    case "sauces":
      categoryId = 5;
      break;
    case "beverages":
      categoryId = 4;
      break;
    case "desserts":
      categoryId = 3;
      break;
    case "snacks":
      categoryId = 2;
      break;
    default:
      categoryId = 1;
      break;
  }

  return (
    <>
      <ProductList type={categoryId} />
    </>
  );
};

export default Category;
