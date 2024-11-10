import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

const PaymentMethod = ({
  paymentMethod,
  setPaymentMethod,
  handleOrderConfirm,
}) => {
  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <Box
      sx={{
        padding: 2,
        border: "1px solid #ddd",
        borderRadius: 1,
        marginTop: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Payment Method
      </Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">Select Payment Method</FormLabel>
        <RadioGroup value={paymentMethod} onChange={handleChange}>
          <FormControlLabel
            value="online_payment"
            control={<Radio />}
            label="Online Payment"
          />
          <FormControlLabel
            value="cash_on_delivery"
            control={<Radio />}
            label="Cash on Delivery"
          />
          <FormControlLabel
            value="pos_on_delivery"
            control={<Radio disabled />}
            label="POS on Delivery"
          />
        </RadioGroup>
      </FormControl>
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={handleOrderConfirm}
        sx={{ marginTop: 2 }}
      >
        Confirm Order
      </Button>
    </Box>
  );
};

export default PaymentMethod;
