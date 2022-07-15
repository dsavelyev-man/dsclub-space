import React from "react";
import { Box, SwipeableDrawer } from "@mui/material";
import BasketItem from "./BasketItem";

const BasketDrawer = (props) => {
  return (
    props.basket.isOpen && (
      <SwipeableDrawer
        anchor="bottom"
        id="basket"
        open={props.basket.isOpen}
        onClose={props.changeOpen}
        onOpen={props.changeOpen}
      >
        <Box>
          {props.basket.products.map((product, index) => (
            <BasketItem product={product} key={index} />
          ))}
        </Box>
      </SwipeableDrawer>
    )
  );
};

export default BasketDrawer;
