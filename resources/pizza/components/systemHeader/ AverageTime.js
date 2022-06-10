import React from "react";
import { Typography } from "@mui/material";

const typographySx = {
  color: "rgb(211,211,211)",
};

const getNumber = () => {
  const max = 59;
  const min = 1;

  let val = Math.floor(Math.random() * (max - min) + min);

  if (val < 10) {
    val = "0" + val;
  }

  return val;
};

const AverageTime = () => {
  console.log(getNumber());
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
        00:{getNumber()}:{getNumber()}
      </Typography>
    </>
  );
};

export default AverageTime;
