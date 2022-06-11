import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import { colors } from "../../theme";

const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        to="/pizza"
        style={{
          textDecoration: "none",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            color: colors.white.main,
            fontWeight: 600,
            marginRight: 4,
          }}
          variant="h5"
        >
          <LocalPizzaIcon fontSize="large" />
          Domino`s
        </Typography>
      </Link>
    </Box>
  );
};

export default Logo;
