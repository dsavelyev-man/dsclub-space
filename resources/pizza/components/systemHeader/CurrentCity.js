import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchSetCity } from "../../store/reducers/delivery/deliveryReducer";
import RoomIcon from "@mui/icons-material/Room";

const CurrentCity = (props) => {
  const city = useSelector((state) => state.delivery.city);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const id = window.localStorage.getItem("city");

    dispatch(fetchSetCity(id));
  }, []);

  return (
    city && (
      <Button
        onClick={props.changeOpen}
        color="white"
        className="navbar__current-city"
        startIcon={<RoomIcon />}
        endIcon={<ArrowDropDownIcon />}
        sx={{
          marginRight: 4,
        }}
      >
        {city.title}
      </Button>
    )
  );
};

export default CurrentCity;
