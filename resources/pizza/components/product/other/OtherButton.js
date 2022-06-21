import React from "react";
import Button, { ButtonWithBackground } from "../Button";
import { CARDSIZE } from "../Card";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addBasket } from "../../../store/reducers/basket/basketReducer";
import Size from "./Size";

const OtherButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const [currentSize, setCurrentSize] = React.useState(1);
  const dispatch = useDispatch();

  const changeOpen = () => {
    setOpen((s) => !s);
  };

  let price;

  const price1 = props.product[`price1`];
  const price2 = props.product[`price2`];
  const price3 = props.product[`price3`];

  if (price1 && currentSize === 1) {
    price = price1;
  } else if (!price1 && price2 && currentSize === 1) {
    price = price2;
  } else if (!price1 && price3 && currentSize === 2) {
    price = price3;
  } else {
    price = props.product[`price${currentSize}`];
  }

  const changeSize = (value) => {
    setCurrentSize(value);
  };

  const add = () => {
    const product = {
      data: {
        size: currentSize,
        price,
      },
      ...props.product,
    };

    dispatch(addBasket(product));
  };

  return (
    <>
      {open && (
        <Box
          className="card-pizza__box"
          sx={{
            position: "absolute",
            width: CARDSIZE.width,
            height: CARDSIZE.height - 120,
            left: 0,
            bottom: 0,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,1) 100%)",
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
            zIndex: 9,
          }}
        >
          <Box
            sx={{
              padding: 2,
            }}
          >
            <Typography variant="h6">{props.product.title}</Typography>
            <Typography
              sx={{
                fontSize: 14,
                color: "grey.600",
              }}
            >
              {props.product.description}
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              marginBottom: 1,
              px: "10px",
              width: "calc(100% - 20px)",
              bottom: 0,
            }}
          >
            <Size product={props.product} size={currentSize} changeSize={changeSize} />
            <ButtonWithBackground onClick={add} fullWidth>
              <Typography
                sx={{
                  fontWeight: 600,
                }}
              >
                В корзину
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                }}
              >
                {price} ₽
              </Typography>
            </ButtonWithBackground>
          </Box>
        </Box>
      )}
      <Button onClick={changeOpen}>Выбрать</Button>
    </>
  );
};

export default OtherButton;
