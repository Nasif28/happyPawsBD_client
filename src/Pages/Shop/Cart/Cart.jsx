import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import DeliveryInformation from ".//DeliveryInformation";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";

const Cart = ({
  handleQuantityChange,
  handleRemoveItem,
  handleOrderConfirm,
}) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(localStorage);
  // Load cart items from Local Storage on initial render
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  console.log(cartItems);

  return (
    <Box className="myContainer" sx={{ padding: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <DeliveryInformation />
        </Grid>

        <Grid item xs={12} md={5}>
          <OrderSummary
            cartItems={cartItems}
            handleQuantityChange={handleQuantityChange}
            handleRemoveItem={handleRemoveItem}
          />
        </Grid>
      </Grid>

      <PaymentMethod handleOrderConfirm={handleOrderConfirm} />
    </Box>
  );
};

export default Cart;
