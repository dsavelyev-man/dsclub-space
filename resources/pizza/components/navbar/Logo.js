import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import { colors } from "../../theme";

const Logo = (props) => {
  let styles;

  if (props.isMd) {
    styles = {
      typography: {
        marginRight: 2,
      },
      logo: {
        height: 28,
        width: 28,
      },
    };
  } else {
    styles = {
      typography: {
        marginRight: 4,
      },
      logo: {
        height: 40,
        width: 40,
      },
    };
  }

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
            ...styles.typography,
          }}
          variant="h5"
        >
          <LocalPizzaIcon sx={styles.logo} />
          {!props.isMd && "Domino`s"}
        </Typography>
      </Link>
    </Box>
  );
};

export default Logo;
