import React from "react";
import { Box, Popover } from "@mui/material";
import BasketItem from "./BasketItem";
import { Scrollbars } from "react-custom-scrollbars";

const BasketPopover = (props) => {
  console.log(props.basket.products);
  return (
    <Popover
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      anchorEl={props.anchorEl}
      id="basket"
      open={props.open}
      onClose={props.changeOpen}
    >
      <Scrollbars style={{ minWidth: 240, height: 320 }}>
        <Box
          sx={{
            padding: 2,
          }}
        >
          {props.basket.products.map((product, index) => (
            <BasketItem product={product} key={index} />
          ))}
        </Box>
      </Scrollbars>
    </Popover>
  );
};

export default BasketPopover;
