import React from "react";
import { Typography } from "@mui/material";

const typographySx = {
  color: "rgb(211,211,211)",
};

const getNumber = (min = 1, max = 59) => {
  let val = Math.floor(Math.random() * (max - min) + min);

  if (val < 10) {
    val = "0" + val;
  }

  return val;
};

const AverageTime = () => {
  return (
    <>
      <Typography sx={typographySx}>Среднее время доставки*</Typography>
      &nbsp;
      <Typography
        sx={{
          ...typographySx,
          fontWeight: 600,
        }}
      >
        00:{getNumber(20)}:{getNumber()}
      </Typography>
    </>
  );
};

export default React.memo(AverageTime);
