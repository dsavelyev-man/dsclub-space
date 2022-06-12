import React from "react";
import { Badge, Box, Button, styled } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { colors } from "../../theme";

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

const Basket = () => {
  return (
    <Box>
      <Badge title="Корзина" badgeContent={4} overlap="circular" color="primary">
        <BasketButton>
          <ShoppingBasketIcon />
        </BasketButton>
      </Badge>
    </Box>
  );
};

export default Basket;
