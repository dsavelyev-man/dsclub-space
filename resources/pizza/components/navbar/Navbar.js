import React from "react";
import { Box, Container, useMediaQuery } from "@mui/material";
// import PromoCode from "./PromoCode";
import Links from "./Links";
import Logo from "./Logo";
import Basket from "./Basket";
import theme, { colors } from "../../theme";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  let styles;

  if (isMd) {
    styles = {
      navbar: {
        padding: "8px",
        display: "flex",
        transform: "translateY(-1px)",
        justifyContent: "space-between",
      },
      otherBox: {
        justifyContent: "center",
        alignItems: "center",
      },
    };
  } else {
    styles = {
      navbar: {
        padding: 2,
      },
      otherBox: {},
    };
  }

  return (
    <Box
      sx={{
        backgroundColor: colors.navbar.main,
        position: "sticky",
        zIndex: 10,
        top: 0,
        ...styles.navbar,
      }}
    >
      <Container
        sx={{
          display: "flex",
          padding: 0,
        }}
      >
        <Logo isMd={isMd} />
        <Links isMd={isMd} />
        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            ...styles.otherBox,
          }}
        >
          <Basket isMd={isMd} />
          {isMd && false && (
            <Link
              to="/pizza/login"
              style={{
                color: colors.white.main,
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              <LoginIcon
                sx={{
                  marginRight: 1,
                }}
              />
            </Link>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
