import React from "react";
import { Badge, Box, Button, styled } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { colors } from "../../theme";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";

const BasketButton = styled(Button)({
  "backgroundColor": colors.domino.main,
  "color": colors.domino.contrastText,
  "height": 51,
  "width": 51,
  "borderRadius": 100,
  ":hover": {
    backgroundColor: colors.domino.main,
  },
});

const Basket = (props) => {
  const basket = useSelector((state) => state.basket);

  const content = (
    <Badge title="Корзина" badgeContent={basket.products.length} overlap="circular" color="primary">
      <BasketButton>
        <ShoppingBasketIcon />
      </BasketButton>
    </Badge>
  );

  return props.isMd ? (
    basket.products.length > 0 ? (
      createPortal(
        <Box
          sx={{
            position: "fixed",
            right: 8,
            bottom: 8,
            zIndex: 10,
          }}
        >
          {content}
        </Box>,
        document.body
      )
    ) : (
      ""
    )
  ) : (
    <Box>{content}</Box>
  );
};

export default Basket;
