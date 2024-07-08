import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const ProductCard = ({ product, onAddToCart, onViewDetails, onBookmark }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked);
    onBookmark(product);
  };

  return (
    <Card sx={{ cursor: "pointer", position: "relative" }}>
      <Box sx={{ height: "280px" }}>
        <CardMedia
          onClick={() => onViewDetails(product)}
          component="img"
          height="160"
          image={product.image}
          alt={product.name}
        />

        <Typography
          variant="caption"
          fontWeight={700}
          sx={{
            position: "absolute",
            top: 130,
            left: 8,
            borderRadius: "4px",
            borderColor: "primary.main",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "2px 5px",
          }}
        >
          {product.brand}
        </Typography>

        <Typography
          sx={{
            position: "absolute",
            top: 3,
            right: 3,
            color: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <Tooltip title="Bookmark">
            <IconButton
              onClick={handleBookmarkClick}
              sx={{
                color: bookmarked ? "#f50057" : "inherit",
              }}
            >
              {bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            </IconButton>
          </Tooltip>
        </Typography>

        <CardContent onClick={() => onViewDetails(product)}>
          <Typography variant="h6" fontWeight={700} lineHeight={1.4}>
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {product.description}
          </Typography>
        </CardContent>
      </Box>

      <Box
        onClick={() => onViewDetails(product)}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          pb: 2,
        }}
      >
        <Typography variant="body1" fontWeight={700} color="text.primary">
          ৳{product.price}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {product.rating} ★
        </Typography>
      </Box>

      <Button
        variant="contained"
        // color="primary"

        fullWidth
        onClick={() => onAddToCart(product)}
        sx={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          backgroundColor: "#f50057", // Custom color for the button
          "&:hover": {
            backgroundColor: "#d4004c", // Darken on hover
          },
        }}
      >
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
