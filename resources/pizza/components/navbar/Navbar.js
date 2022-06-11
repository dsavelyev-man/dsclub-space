import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import PromoCode from "./PromoCode";
import Links from "./Links";
import Logo from "./Logo";
import Basket from "./Basket";

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "grey.900",
        padding: 3,
        position: "sticky",
        top: 0,
      }}
    >
      <Container
        sx={{
          display: "flex",
        }}
      >
        <Logo />
        <Links />
        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
          }}
        >
          <PromoCode />
          <Basket />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
