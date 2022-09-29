import React from "react";
import { Box, Popover } from "@mui/material";
import BasketItem from "./BasketItem";
import { Scrollbar } from 'react-scrollbars-custom';

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
        <Scrollbar autoHeight autoHeightMax={326} style={{ minWidth: 320 }}>
          <Box>
            {props.basket.products.map((product, index) => (
              <BasketItem product={product} key={index} />
            ))}
          </Box>
        </Scrollbar>
      </Popover>
    )
  );
};

export default BasketPopover;
