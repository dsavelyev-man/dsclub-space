import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { colors } from "../../theme";
import AddIcon from '@mui/icons-material/Add';

const Btn = styled(Button)({
  minWidth: "auto",
  borderRadius: 100,
  padding: "4px",
})

const BasketItem = (props) => {
  const data = props.product.data;

  const thickness = data.thickness === 1 ? "Классическое" : "Тонкое";
  return (
    <Box
      sx={{
        padding: 1,
      }}
    >
      <Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: 15,
              fontFamily: `"Poppins", sans-serif`,
              color: grey[900],
              margin: 0,
            }}
          >
            {props.product.title}
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              color: grey[700],
              fontWeight: 600,
              fontFamily: `"Poppins", sans-serif`,
            }}
          >
            {thickness} {data.size}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          mt: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Btn
            color="inherit"
            sx={{
              minWidth: "auto",
              borderRadius: 100,
              padding: "4px",
            }}
          >
            <DeleteOutlineIcon
              sx={{
                fontSize: 24,
              }}
            />
          </Btn>
          <Typography
            sx={{
              mx: 1,
            }}
          >
            {props.product.count}
          </Typography>
          <Btn
            color="inherit"
          >
            <AddIcon
              sx={{
                fontSize: 24,
              }}
            />
          </Btn>
        </Box>
        <Typography
          sx={{
            color: grey[900],
            fontWeight: 600,
          }}
        >
          {data.price} ₽
        </Typography>
      </Box>
    </Box>
  );
};

export default BasketItem;
