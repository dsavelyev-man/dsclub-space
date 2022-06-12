import React from "react";
import { Box, Button, FormControl, FormGroup, styled, TextField } from "@mui/material";
import { colors } from "../../theme";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PromoCodeField = styled(TextField)({
  "& fieldset": {
    borderRadius: 100,
    border: "none",
  },

  "borderRadius": 100,
  "backgroundColor": colors.promoCode.main,

  "& .MuiOutlinedInput-input": {
    color: colors.promoCode.contrastText,
    paddingRight: 68,
  },
});

const PromoCodeButton = styled(Button)({
  "backgroundColor": colors.promoCode.button,
  "position": "absolute",
  "color": colors.promoCode.contrastText,
  "height": 51,
  "width": 51,
  "borderRadius": 100,
  "right": 0,
  ":hover": {
    backgroundColor: colors.promoCode.button,
  },
});

const PromoCode = () => {
  const [promoCode, setPromoCode] = React.useState("");

  const changePromoCode = (e) => {
    setPromoCode(e.target.value.toUpperCase());
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        marginRight: 2,
        maxWidth: 200,
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
        }}
        onSubmit={submit}
      >
        <PromoCodeField
          value={promoCode}
          onChange={changePromoCode}
          placeholder="Промокод"
          variant="outlined"
        />
        <PromoCodeButton type="submit">
          <ArrowForwardIcon />
        </PromoCodeButton>
      </form>
    </Box>
  );
};

export default PromoCode;
