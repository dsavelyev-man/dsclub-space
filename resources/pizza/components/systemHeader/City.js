import React from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const City = (props) => {
  let title = props.city.title;
  const currentId = useSelector((state) => state.city.current.id);
  let weight = props.city.big ? 600 : 400;
  const isCurrent = currentId === props.city.id;

  if (isCurrent) {
    weight = 600;
  }

  if (title.length >= 15) {
    title = title.slice(0, -4) + "...";
  }

  return (
    <Typography
      sx={{
        padding: "8px 4px",
        width: "18%",
        fontSize: 14,
        cursor: "pointer",
        fontWeight: weight,
      }}
      color={isCurrent && "rgb(227, 24, 54)"}
      onClick={() => props.selectCity(props.city)}
    >
      {title}
    </Typography>
  );
};

export default City;
