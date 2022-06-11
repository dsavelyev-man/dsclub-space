import { Box, Button, Container } from "@mui/material";
import React from "react";
import "../../scss/components/systemHeader.scss";
import ModalCitites from "./ModalCitites";
import CurrentCity from "./CurrentCity";
import DeliveryType from "./DeliveryType";
import AverageTime from "./ AverageTime";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { colors } from "../../theme";

const SystemHeader = () => {
  const [open, setOpen] = React.useState(false);

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
        }}
      >
        <CurrentCity changeOpen={changeOpen} />
        <DeliveryType />
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
      </Container>
      {open && <ModalCitites open={open} changeOpen={changeOpen} />}
    </Box>
  );
};

export default SystemHeader;
