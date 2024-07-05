import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ShopNav = ({ handleCartClick, cartItemsCount }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Pet Shop
      </Typography>
      <IconButton color="inherit" onClick={handleCartClick}>
        <Badge badgeContent={cartItemsCount} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default ShopNav;
