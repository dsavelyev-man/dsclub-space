import React from "react";
import { Box, Modal } from "@mui/material";
import axios from "axios";
import City from "./City";

const ModalCities = (props) => {
  const [cities, setCities] = React.useState([]);

  React.useEffect(() => {
    const getCities = async () => {
      const cities = await axios.get("/ajax/cities");

      if (cities.status === 200) {
        setCities(cities.data);
      } else {
        console.log("error");
      }
    };

    getCities();
  }, []);

  const selectCity = (id) => {
    window.localStorage.setItem("city", id);
  };

  return (
    <Modal open={props.open} onClose={props.changeOpen}>
      <Box
        container
        spacing={1}
        sx={{
          bgcolor: "background.paper",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: 2,
          display: "flex",
          width: "40em",
          height: "30em",
          flexFlow: "column wrap",
          borderRadius: 2,
        }}
      >
        {cities.map((city) => (
          <City key={city.id} city={city} selectCity={selectCity} />
        ))}
      </Box>
    </Modal>
  );
};

export default ModalCities;
