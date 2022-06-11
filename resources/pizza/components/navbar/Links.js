import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { colors } from "../../theme";

const NAVIGATION = [
  {
    to: "/pizza/category/stock",
    label: "АКЦИИ",
  },
  {
    to: "/pizza/category/pizza",
    label: "ПИЦЦА",
  },
  {
    to: "/pizza/category/snacks",
    label: "ЗАКУСКИ",
  },
  {
    to: "/pizza/category/desserts",
    label: "ДЕСЕРТЫ",
  },
  {
    to: "/pizza/category/beverages",
    label: "НАПИТКИ",
  },
  {
    to: "/pizza/category/sauces",
    label: "СОУСЫ",
  },
];

const Links = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {NAVIGATION.map((link) => (
        <Link
          style={{
            color: colors.white.main,
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            marginRight: 30,
          }}
          key={link.to}
          to={link.to}
        >
          {link.label}
        </Link>
      ))}
    </Box>
  );
};

export default Links;
