import React from "react";
import { Box, Popover } from "@mui/material";
import BasketItem from "./BasketItem";
import { Scrollbars } from "react-custom-scrollbars";

const BasketPopover = (props) => {
  return (
    props.basket.isOpen && (
      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          marginTop: 1,
        }}
        anchorEl={props.anchorEl}
        id="basket"
        open={props.basket.isOpen}
        onClose={props.changeOpen}
      >
        <Scrollbars autoHeight autoHeightMax={326} style={{ minWidth: 320 }}>
          <Box>
            {props.basket.products.map((product, index) => (
              <BasketItem product={product} key={index} />
            ))}
          </Box>
        </Scrollbars>
      </Popover>
    )
  );
};

export default BasketPopover;
