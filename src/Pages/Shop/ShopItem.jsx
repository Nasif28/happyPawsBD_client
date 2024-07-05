import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const ShopItem = ({ item }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body1" color="text.primary">
          ${item.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ShopItem;
