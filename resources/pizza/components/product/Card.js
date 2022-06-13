import React from "react";
import { Card as MCard, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";

const Card = (props) => {
  console.log(props);
  return (
    <Grid item>
      <MCard
        sx={{
          width: 280,
          height: 400,
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
        <CardContent>
          <Typography variant="h6">{props.product.title}</Typography>
        </CardContent>
      </MCard>
    </Grid>
  );
};

export default Card;
