import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartDrawer = ({
  cartOpen,
  handleCartClose,
  cartItems,
  removeFromCart,
}) => (
  <Drawer anchor="right" open={cartOpen} onClose={handleCartClose}>
    <List sx={{ width: 250 }}>
      {cartItems.length === 0 ? (
        <ListItem>
          <ListItemText primary="Cart is empty" />
        </ListItem>
      ) : (
        cartItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.name} secondary={`$${item.price}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => removeFromCart(item)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      )}
    </List>
  </Drawer>
);

export default CartDrawer;
