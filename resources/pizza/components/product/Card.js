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

const Card = (props) => {
  let previewDescription = props.product.description;

  const [currentPrice, setCurrentPrice] = React.useState(1);

  console.log(previewDescription.length);

  if (previewDescription.length >= 85) {
    previewDescription = previewDescription.slice(0, 85);

    if (previewDescription.endsWith(",")) {
      previewDescription = previewDescription.slice(0, -1);
    }

    previewDescription += "...";
  }
  return (
    <Grid item>
      <MCard
        sx={{
          width: 280,
          height: 480,
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
              sadsa
            </Box>
            <Box
              sx={{
                fontWeight: 600,
                fontSize: 20,
                padding: 1,
              }}
            >
              от {props.product[`price${currentPrice}`]} ₽
            </Box>
          </Box>
        </CardContent>
      </MCard>
    </Grid>
  );
};

export default Card;
