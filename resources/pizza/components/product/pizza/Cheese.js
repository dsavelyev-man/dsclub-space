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
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: 28,
        alignItems: "center",
        justifyContent: "flex-end",
        cursor: "pointer",
      }}
      onClick={add}
    >
      <Button
        sx={{
          "border": "none",
          "backgroundColor": props.active ? colors.domino.main : colors.white.main,
          "color": props.active ? colors.domino.contrastText : colors.white.contrastText,
          "padding": 1,
          "minWidth": 28,
          "width": 28,
          "height": 28,
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
              height: 20,
              width: 20,
            }}
          />
        ) : (
          <AddIcon
            sx={{
              height: 20,
              width: 20,
            }}
          />
        )}
      </Button>
      <Typography>Сыр x2</Typography>
    </Box>
  );
};

export default Cheese;
