import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { colors } from "../../theme";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { addDuplicate, removeBasket } from "../../store/reducers/basket/basketReducer";

const Btn = styled(Button)({
  minWidth: "auto",
  borderRadius: 100,
  padding: "4px",
});

const BasketItem = (props) => {
  const data = props.product.data;
  console.log(data)
  const dispatch = useDispatch();

  const onRemove = () => {
    dispatch(removeBasket(props.product.searchId));
  };

  const onAddDuplicate = () => {
    dispatch(addDuplicate(props.product.searchId));
  };

  const thickness = data.thickness === 1 ? "Классическое" : "Тонкое";
  return (
    <Box
      className="basket__item"
      sx={{
        display: "flex",
        marginBottom: 2,

        ":last-child": {
          marginBottom: 0,
        }
      }}
    >
      <img height={140} src={props.product.image_url} />
      <Box
        sx={{
          padding: 2,
          width: "100%",
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
            <Btn color="inherit" onClick={onRemove}>
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
            <Btn onClick={onAddDuplicate} color="inherit">
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
            {data.price * props.product.count} ₽
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BasketItem;
