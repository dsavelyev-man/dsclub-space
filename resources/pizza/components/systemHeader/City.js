import React from "react";
import { Typography } from "@mui/material";

const City = (props) => {
  let title = props.city.title;

  if (title.length >= 15) {
    title = title.slice(0, -4) + "...";
  }

  return (
    <Typography
      sx={{
        padding: "8px 4px",
        width: "18%",
        fontSize: 15,
        cursor: "pointer",
        fontWeight: props.city.big ? 600 : 400,
      }}
      onClick={() => props.selectCity(props.city.id)}
    >
      {title}
    </Typography>
  );
};

export default City;
