import { Box, Button, Container } from "@mui/material";
import React from "react";
import "../../scss/components/systemHeader.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ModalCitites from "./ModalCitites";
import CurrentCity from "./CurrentCity";

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
      }}
    >
      <Container>
        <CurrentCity changeOpen={changeOpen} />
      </Container>
      {open && <ModalCitites open={open} changeOpen={changeOpen} />}
    </Box>
  );
};

export default SystemHeader;
