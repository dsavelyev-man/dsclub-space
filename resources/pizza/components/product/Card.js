import React from "react";
import {
  Box,
  Card as MCard,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import "../../scss/components/card.scss";
import PizzaButton from "./pizza/PizzaButton";

export const CARDSIZE = {
  width: 280,
  height: 480,
};

const Card = (props) => {
  let previewDescription = props.product.description;

  if (previewDescription.length >= 85) {
    previewDescription = previewDescription.slice(0, 85);

    if (previewDescription.endsWith(",")) {
      previewDescription = previewDescription.slice(0, -1);
    }

    previewDescription += "...";
  }

  let content = "";

  switch (props.product.type_id) {
    case 1:
      content = <PizzaButton product={props.product} />;
      break;
  }

  const price = props.product.price1 || props.product.price2 || props.product.price3;

  return (
    <Grid item>
      <MCard
        sx={{
          ...CARDSIZE,
          borderRadius: 2,
        }}
        variant="outlined"
      >
        <CardMedia
          sx={{
            width: 280,
            height: 280,
          }}
          height={280}
          image={props.product.image_url}
        />
        <CardContent
          sx={{
            position: "relative",
            height: 160,
          }}
        >
          <Typography variant="h6">{props.product.title}</Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: "grey.600",
            }}
          >
            {previewDescription}
          </Typography>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                padding: 1,
              }}
            >
              {content}
            </Box>
            <Box
              sx={{
                fontWeight: 600,
                fontSize: 18,
                padding: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {price && `от ${price} ₽`}
            </Box>
          </Box>
        </CardContent>
      </MCard>
    </Grid>
  );
};

export default Card;
