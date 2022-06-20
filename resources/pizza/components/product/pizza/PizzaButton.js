import React from "react";
import Button, { ButtonWithBackground } from "../Button";
import { CARDSIZE } from "../Card";
import { Box, Typography } from "@mui/material";
import SelectThickness from "./SelectThickness";
import Size from "./Size";
import Cheese from "./Cheese";
import { useDispatch } from "react-redux";
import { addBasket } from "../../../store/reducers/basket/basketReducer";

const PizzaButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const [currentSize, setCurrentSize] = React.useState(1);
  const [thickness, setThickness] = React.useState(0);
  const [ingredients, setIngredients] = React.useState([]);
  const dispatch = useDispatch();

  const changeOpen = () => {
    setOpen((s) => !s);
  };

  const price = props.product[`price${currentSize}`];

  const changeSize = (value) => {
    setCurrentSize(value);
  };

  const changeThickness = (value) => {
    setThickness(value);
  };

  const addIngredient = (value) => {
    setIngredients((s) => {
      const withoutIng = s.filter((ing) => ing.id !== value.id);

      if (withoutIng.length === s.length) {
        return [...s, value];
      } else {
        return withoutIng;
      }
    });
  };

  const add = () => {
    const product = {
      data: {
        size: currentSize,
        thickness,
        ingredients,
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
            <Cheese
              active={!!ingredients.find((ing) => ing.id === 1)}
              addIngredient={addIngredient}
            />
            <Size product={props.product} size={currentSize} changeSize={changeSize} />
            <SelectThickness thickness={thickness} changeThickness={changeThickness} />
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

export default PizzaButton;
