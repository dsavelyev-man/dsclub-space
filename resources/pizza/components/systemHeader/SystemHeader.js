import { Box, Button, Container, useMediaQuery } from "@mui/material";
import React from "react";
import "../../scss/components/systemHeader.scss";
import ModalCitites from "./ModalCitites";
import CurrentCity from "./CurrentCity";
import DeliveryType from "./DeliveryType";
import AverageTime from "./ AverageTime";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import theme, { colors } from "../../theme";

const SystemHeader = () => {
  const [open, setOpen] = React.useState(false);
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const changeOpen = () => {
    setOpen((s) => !s);
  };

  return (
    <Box
      sx={{
        backgroundColor: "grey.900",
        padding: 1,
        height: "30px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",

          [theme.breakpoints.down("md")]: {
            "justifyContent": "space-between",

            "& .navbar__delivery-type, & .navbar__current-city": {
              margin: 0,
              fontSize: 12,
            },
          },
        }}
      >
        <CurrentCity changeOpen={changeOpen} />
        <DeliveryType />
        {!isMd && (
          <>
            <AverageTime />
            <Link
              to="/pizza/login"
              style={{
                color: colors.white.main,
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <LoginIcon
                sx={{
                  marginRight: 1,
                }}
              />
              Войти
            </Link>
          </>
        )}
      </Container>
      {open && <ModalCitites open={open} changeOpen={changeOpen} />}
    </Box>
  );
};

export default SystemHeader;
