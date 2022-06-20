import React from "react";
import { Badge, Box, Button, styled } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { colors } from "../../theme";
import { useSelector } from "react-redux";

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
  const basket = useSelector((state) => state.basket);

  return (
    <Box>
      <Badge
        title="Корзина"
        badgeContent={basket.products.length}
        overlap="circular"
        color="primary"
      >
        <BasketButton>
          <ShoppingBasketIcon />
        </BasketButton>
      </Badge>
    </Box>
  );
};

export default Basket;
