import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchSetCity } from "../../store/reducers/city/cityReducer";

const CurrentCity = (props) => {
  const city = useSelector((state) => state.city.current);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const id = window.localStorage.getItem("city");

    dispatch(fetchSetCity(id));
  }, []);

  return (
    city && (
      <Button onClick={props.changeOpen} color="white" endIcon={<ArrowDropDownIcon />}>
        {city.title}
      </Button>
    )
  );
};

export default CurrentCity;
