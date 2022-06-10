import { Box, Button, Container } from "@mui/material";
import React from "react";
import "../../scss/components/systemHeader.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ModalCitites from "./ModalCitites";

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
        <Button onClick={changeOpen} color="white" endIcon={<ArrowDropDownIcon />}>
          Moscow
        </Button>
      </Container>
      <ModalCitites open={open} changeOpen={changeOpen} />
    </Box>
  );
};

export default SystemHeader;
