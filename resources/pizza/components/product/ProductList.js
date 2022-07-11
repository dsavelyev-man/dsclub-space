import React from "react";
import axios from "axios";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import Card from "./Card";
import theme from "../../theme";

const ProductList = (props) => {
  const [products, setProducts] = React.useState([]);
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  React.useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`/ajax/products?product_type=pizza&type=${props.type}`);

      if (res.status === 200) {
        setProducts(res.data);
      }
    };

    getProducts();
  }, [props.type]);

  return (
    <Box
      sx={{
        py: 2,
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: 1180,
        }}
      >
        {isMd ? (
          <Box>
            {products.map((product) => {
              return <Card isMd={isMd} key={product.id} product={product} />;
            })}
          </Box>
        ) : (
          <Grid
            container
            columns={{
              xs: 4,
            }}
            spacing={2}
          >
            {products.map((product) => {
              return <Card isMd={isMd} key={product.id} product={product} />;
            })}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default ProductList;
