import React from "react";
import Button, { ButtonWithBackground } from "./Button";
import { CARDSIZE } from "./Card";
import { Box, Typography } from "@mui/material";

const PizzaButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const [currentPrice, setCurrentPrice] = React.useState(1);

  const changeOpen = () => {
    setOpen((s) => !s);
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
            <ButtonWithBackground fullWidth>
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
                {props.product.price1} ₽
              </Typography>
            </ButtonWithBackground>
          </Box>
        </Box>
      )}
      <Button onClick={changeOpen}>Выбрать</Button>
    </>
  );
};

export default PizzaButton;
