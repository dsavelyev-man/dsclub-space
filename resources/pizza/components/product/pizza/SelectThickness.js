import React from "react";
import { MenuItem, Select, styled } from "@mui/material";
import { colors } from "../../../theme";
import IconThickness from "../../../svgs/IconThickness.js";
import IconThickness2 from "../../../svgs/Iconthickness2.js";

const SSelect = styled(Select)({
  backgroundColor: colors.white.main,
  borderRadius: 100,
  padding: "4px 10px",
  marginBottom: 10,
});

const itemStyle = {
  "display": "flex",
  "alignItems": "center",

  "& svg": {
    marginRight: "8px",
  },
};

const itemSelectStyle = {
  ...itemStyle,

  "& svg": {
    ...itemStyle["& svg"],

    height: 40,
    width: 40,
  },
};

const Item = styled(MenuItem)(itemSelectStyle);

const SelectThickness = (props) => {
  const onChange = (e) => {
    props.changeThickness(e.target.value);
  };

  return (
    <SSelect
      sx={{
        "& .MuiSelect-select": itemStyle,
      }}
      value={props.thickness}
      onChange={onChange}
    >
      <Item value={0}>
        <IconThickness2 /> Тонкое
      </Item>
      <Item value={1}>
        <IconThickness /> Классическое
      </Item>
    </SSelect>
  );
};

export default SelectThickness;
