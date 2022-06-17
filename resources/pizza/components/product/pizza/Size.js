import React from "react";
import { styled, Tab, Tabs } from "@mui/material";
import { colors } from "../../../theme";

const STab = styled(Tab)({
  // backgroundColor: colors.white.main,
  "color": colors.domino.main,
  "padding": 0,
  "minHeight": "24px",

  "&.Mui-selected": {
    color: colors.domino.main,
  },
});

const Size = (props) => {
  const changeCurrent = (e, value) => {
    props.changeSize(value + 1);
  };

  return (
    <Tabs
      onChange={changeCurrent}
      sx={{
        "& .MuiButtonBase-root": {
          padding: 0,
          minHeight: "32px",
          minWidth: 80,
        },
        "minHeight": "32px",
        "marginBottom": "10px",
        "& .MuiTabs-indicator": {
          backgroundColor: colors.domino.main,

          //     backgroundColor: "none",
          //     height: "100%",
          //     borderRadius: 100,
          //     background:
          //       "linear-gradient(0deg, rgb(0, 60, 230)4%, rgba(255, 255, 255, 0) 4%, rgba(255, 255, 255, 0) 100%)",
        },

        "& .MuiTabs-scroller": {
          display: "flex",
          justifyContent: "center",
        },
      }}
      value={props.size - 1}
      aria-label="basic tabs example"
    >
      {props.product.price1 && <STab label="20 см" />}
      {props.product.price2 && <STab label="28 см" />}
      {props.product.price3 && <STab label="33 см" />}
    </Tabs>
  );
};

export default Size;
