import React from "react";
import { Button as MButton, styled } from "@mui/material";
import { colors } from "../../theme";

const Button = styled(MButton)({
  border: `1px solid ${colors.domino.main}`,
  color: colors.domino.main,
  borderRadius: 100,
  padding: "6px 26px",
});

export const ButtonWithBackground = styled(MButton)({
  "color": "#FFFFFF",
  "backgroundColor": colors.domino.main,
  ":hover": {
    backgroundColor: colors.domino.main,
  },
  "display": "flex",
  "justifyContent": "space-between",
  "borderRadius": 100,
  "padding": "6px 26px",
});

export default Button;
