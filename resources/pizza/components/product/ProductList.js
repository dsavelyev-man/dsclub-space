import React from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
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
    <Box>
      <Grid
        container
        columns={{
          xs: 4,
        }}
        spacing={2}
        px={10}
        pt={2}
      >
        {products.map((product) => {
          console.log(product);
          return <Card key={product.id} product={product} />;
        })}
      </Grid>
    </Box>
  );
};

export default ProductList;
