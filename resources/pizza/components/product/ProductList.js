import React from "react";
import axios from "axios";
import { Box, Container, Grid } from "@mui/material";
import Card from "./Card";

const ProductList = (props) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`/ajax/products?product_type=pizza&type=${props.type}`);

      if (res.status === 200) {
        setProducts(res.data);
      }
    };

    getProducts();
  }, []);

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
        <Grid
          container
          columns={{
            xs: 4,
          }}
          spacing={2}
        >
          {products.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductList;
