import React from "react";
import { MenuItem, Select, styled } from "@mui/material";
import { colors } from "../../../theme";

const SSelect = styled(Select)({
  backgroundColor: colors.white.main,
  borderRadius: 100,
  padding: "4px 10px",
  marginBottom: 10,
});

const SelectThickness = (props) => {
  const onChange = (e) => {
    props.changeThickness(e.target.value);
  };

  return (
    <SSelect value={props.thickness} onChange={onChange}>
      <MenuItem value={0}>Тонкое</MenuItem>
      <MenuItem value={1}>Классическое</MenuItem>
    </SSelect>
  );
};

export default SelectThickness;
