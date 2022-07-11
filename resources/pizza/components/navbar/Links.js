import React from "react";
import { Link } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import theme, { colors } from "../../theme";

const NAVIGATION = [
  // {
  //   to: "/pizza/category/stock",
  //   label: "АКЦИИ",
  // },
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

const Links = (props) => {
  let styles;

  if (props.isMd) {
    styles = {
      link: {
        fontSize: 12,
        marginRight: 10,
      },
      box: {
        overflowX: "auto",
        marginRight: 1,
      },
    };
  } else {
    styles = {
      link: {
        fontSize: 18,
        marginRight: 30,
      },
      box: {},
    };
  }

  return (
    <Box
      sx={{
        display: "flex",
        ...styles.box,
      }}
    >
      {NAVIGATION.map((link) => (
        <Link
          style={{
            color: colors.white.main,
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            fontFamily: 'Roboto","Helvetica","Arial",sans-serif',
            ...styles.link,
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
