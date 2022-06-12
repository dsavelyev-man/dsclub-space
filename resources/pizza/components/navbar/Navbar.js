import React from "react";
import { Box, Container } from "@mui/material";
import PromoCode from "./PromoCode";
import Links from "./Links";
import Logo from "./Logo";
import Basket from "./Basket";
import { colors } from "../../theme";

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: colors.navbar.main,
        padding: 2,
        position: "sticky",
        zIndex: 10,
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
