import React from "react";
import Button from "../Button";
import AddIcon from "@mui/icons-material/Add";
import { Box, Typography } from "@mui/material";
import { colors } from "../../../theme";
import DoneIcon from "@mui/icons-material/Done";

const Cheese = (props) => {
  console.log(props);

  const add = () => {
    props.addIngredient({
      id: 1,
      name: "Сыр x2",
      price: 58,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: 24,
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          display: "flex",
          cursor: "pointer",
          alignItems: "center",
        }}
        onClick={add}
      >
        <Button
          sx={{
            "border": "none",
            "backgroundColor": props.active ? colors.domino.main : colors.white.main,
            "color": props.active ? colors.domino.contrastText : colors.white.contrastText,
            "padding": 1,
            "minWidth": 24,
            "width": 24,
            "height": 24,
            "marginRight": 1,

            ":hover": {
              border: "none",
              backgroundColor: props.active ? colors.domino.main : colors.white.main,
            },
          }}
          variant="outlined"
        >
          {props.active ? (
            <DoneIcon
              sx={{
                height: 16,
                width: 16,
              }}
            />
          ) : (
            <AddIcon
              sx={{
                height: 16,
                width: 16,
              }}
            />
          )}
        </Button>
        <Typography fontSize={12} fontWeight={700}>
          Сыр x2
        </Typography>
      </Box>
    </Box>
  );
};

export default Cheese;
