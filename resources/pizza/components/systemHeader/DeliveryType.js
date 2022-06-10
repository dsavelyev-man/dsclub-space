import React from "react";
import { MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import { setType } from "../../store/reducers/city/deliveryReducer";

const iconSx = {
  marginRight: 1,
};

const DeliveryType = () => {
  const delivery = useSelector((state) => state.delivery.type);
  const dispatch = useDispatch();

  const setDelivery = (e) => {
    window.localStorage.setItem("deliveryType", e.target.value);

    dispatch(setType(e.target.value));
  };

  return (
    <Select
      color="white"
      variant="outlined"
      sx={{
        marginRight: 4,
        width: 150,
      }}
      onChange={setDelivery}
      value={delivery}
    >
      <MenuItem value={0}>
        <DeliveryDiningIcon sx={iconSx} /> Доставка
      </MenuItem>
      <MenuItem value={1}>
        <RoomServiceIcon sx={iconSx} /> Навынос
      </MenuItem>
    </Select>
  );
};

export default DeliveryType;
