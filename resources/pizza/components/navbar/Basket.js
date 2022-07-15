import React from "react";
import { Badge, Box, Button, styled } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { colors } from "../../theme";
import { useSelector, useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import BasketPopover from "./BasketPopover";
import { setOpen } from "../../store/reducers/basket/basketReducer";
import BasketDrawer from "./BasketDrawer";

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const changeOpen = (e) => {
    if (basket.products.length > 0) {
      dispatch(setOpen(!basket.isOpen));

      if (!props.isMd) {
        setAnchorEl(e.currentTarget);
      }
    }
  };

  const content = (
    <Badge title="Корзина" badgeContent={basket.products.length} overlap="circular" color="primary">
      <BasketButton aria-describedby="basket" onClick={changeOpen}>
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
          <BasketDrawer anchorEl={anchorEl} basket={basket} changeOpen={changeOpen} />
        </Box>,
        document.body
      )
    ) : (
      ""
    )
  ) : (
    <Box>
      {content}
      <BasketPopover anchorEl={anchorEl} basket={basket} changeOpen={changeOpen} />
    </Box>
  );
};

export default Basket;
