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
import PizzaConstructor from "./pizza/PizzaConstructor";
import OtherButton from "./other/OtherButton";

export const CARDSIZE = {
  width: 280,
  height: 480,
};

const Card = (props) => {
  let styles;

  if (props.isMd) {
    styles = {
      box: {
        display: "flex",
        marginBottom: 1,
        mx: 1,
      },
      image: {
        height: 115,
        maxWidth: 115,
        flex: 1,
        mr: "5px",
      },
      content: {
        "flex": 1,
        "padding": "1px",

        ":last-child": {
          padding: 0,
        },
      },
      heading: {
        fontSize: 14,
      },
      text: {
        fontSize: 11,
      },
      price: {
        fontSize: 12,
        pr: 1,
      },
    };
  } else {
    styles = {
      box: {
        ...CARDSIZE,
      },
      image: {
        width: 280,
        height: 280,
      },
      content: {
        height: 160,
      },
      heading: {},
      text: {
        fontSize: 14,
      },
      price: {
        padding: 1,
        fontSize: 18,
      },
    };
  }

  let previewDescription = props.product.description;

  if (previewDescription.length >= 85 || (previewDescription.length >= 60 && props.isMd)) {
    previewDescription = previewDescription.slice(0, props.isMd ? 60 : 85);

    if (previewDescription.endsWith(",") || previewDescription.endsWith(" ")) {
      previewDescription = previewDescription.slice(0, -1);
    }

    previewDescription += "...";
  }

  let content = "";

  switch (props.product.type_id) {
    case 1:
      content = <PizzaButton isMd={props.isMd} product={props.product} />;
      break;
    case 6:
      content = <PizzaConstructor isMd={props.isMd} product={props.product} />;
      break;
    default:
      content = <OtherButton isMd={props.isMd} product={props.product} />;
  }

  const price = props.product.price1 || props.product.price2 || props.product.price3;

  const mcard = (
    <MCard
      sx={{
        borderRadius: 2,
        ...styles.box,
      }}
      variant="outlined"
    >
      <CardMedia sx={styles.image} height={280} image={props.product.image_url} />
      <CardContent
        sx={{
          position: "relative",
          ...styles.content,
        }}
      >
        <Typography variant="h6" sx={styles.heading}>
          {props.product.title}
        </Typography>
        <Typography
          sx={{
            color: "grey.600",
            ...styles.text,
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              ...styles.price,
            }}
          >
            {price && `от ${price} ₽`}
          </Box>
        </Box>
      </CardContent>
    </MCard>
  );

  return props.isMd ? mcard : <Grid item>{mcard}</Grid>;
};

export default Card;
