import React from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import ShopItemCard from "../components/ShopItemCard";
import shopItems from "../data/shopItems.json";

const CategoryPage = () => {
  const { category } = useParams();
  const categoryItems = shopItems.filter(
    (item) => item.category.toLowerCase() === category
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Typography>
      <Grid container spacing={3}>
        {categoryItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <ShopItemCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryPage;
