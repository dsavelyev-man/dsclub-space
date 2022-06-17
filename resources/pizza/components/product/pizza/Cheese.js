import React from "react";
import Button from "../Button";
import AddIcon from "@mui/icons-material/Add";
import { Box, Typography } from "@mui/material";
import { colors } from "../../../theme";

const Cheese = (props) => {
  console.log(props);
  return (
    <Box
      sx={{
        display: "flex",
        height: 28,
        alignItems: "center",
        justifyContent: "flex-end",
        cursor: "pointer",
      }}
    >
      <Button
        sx={{
          "border": "none",
          "backgroundColor": colors.white.main,
          "color": colors.white.contrastText,
          "padding": 1,
          "minWidth": 28,
          "width": 28,
          "height": 28,
          "marginRight": 1,

          ":hover": {
            border: "none",
            backgroundColor: colors.white.main,
          },
        }}
        variant="outlined"
      >
        <AddIcon
          sx={{
            height: 20,
            width: 20,
          }}
        />
      </Button>
      <Typography>Сыр x2</Typography>
    </Box>
  );
};

export default Cheese;
