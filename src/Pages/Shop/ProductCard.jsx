import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

const ProductCard = ({ product, onAddToCart, onViewDetails }) => (
  <Card>
    <CardMedia
      component="img"
      height="140"
      image={product.image}
      alt={product.name}
    />
    <CardContent>
      <Typography variant="h6">{product.name}</Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
      <Typography variant="body1" color="text.primary">
        ${product.price}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" onClick={() => onAddToCart(product)}>
          Add to Cart
        </Button>
        <Button sx={{ ml: 1 }} onClick={() => onViewDetails(product)}>
          View Details
        </Button>
      </Box>
    </CardContent>
  </Card>
);

export default ProductCard;
