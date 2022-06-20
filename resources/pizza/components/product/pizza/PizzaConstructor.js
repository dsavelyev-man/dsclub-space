import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const PizzaConstructor = () => {
  return (
    <Button to="/pizza/constructor" component={Link}>
      Собрать
    </Button>
  );
};

export default PizzaConstructor;
