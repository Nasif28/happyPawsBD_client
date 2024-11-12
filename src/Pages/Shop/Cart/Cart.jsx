import React, { useEffect, useState } from "react";
import { Alert, Box, Grid, Snackbar } from "@mui/material";
import DeliveryInformation from ".//DeliveryInformation";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import axios from "axios";
import { createPaymentSession, orders } from "../../../API/api";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QJQ6YGXyE7DqlV8yCFisSMWfkn305hInVMZYrIH4wq0CINZHgBTnKojeSpj73UJzbe1WY00LHvU8rit3qgHA4rs00RJ081Eb3"
);

const Cart = ({ handleQuantityChange }) => {
  const [cartItems, setCartItems] = useState([]);
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    city: "",
    state: "",
    zip: "",
    address: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cash_on_delivery");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  const handleRemoveItem = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const validateFields = () => {
    let newErrors = {};
    if (!deliveryInfo.name) newErrors.name = "Name is required.";
    if (!deliveryInfo.phone) newErrors.phone = "Mobile number is required.";
    if (!deliveryInfo.email) newErrors.email = "Email is required.";
    if (!deliveryInfo.address) newErrors.address = "Address is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrderConfirm = async () => {
    if (!validateFields()) {
      alert("Please fill in all required delivery information.");
      return;
    }

    if (paymentMethod === "cash_on_delivery") {
      try {
        const orderDetails = {
          deliveryInfo,
          orderSummary: {
            items: cartItems,
            total: calculateTotal(),
          },
          paymentMethod,
        };

        await orders(orderDetails);

        setSnackbarMessage("Order placed successfully!");
        setSnackbarOpen(true);

        // Clear form and cart data after placing order
        setDeliveryInfo({
          name: "",
          email: "",
          phone: "",
          city: "",
          state: "",
          zip: "",
          address: "",
        });
        setCartItems([]); // Clear the cart from state
        localStorage.removeItem("cartItems"); // Remove cart from localStorage
        setPaymentMethod("cash_on_delivery");
        setShowSuccess(true);
      } catch (error) {
        console.error("Error:", error);
      }
    } else if (paymentMethod === "online_payment") {
      const stripe = await stripePromise;
      try {
        cartItems.forEach((item) => {
          if (isNaN(item.price) || item.price <= 0) {
            console.error(`Invalid price for item: ${item.id}`);
            return; // Stop the process if the price is invalid
          }
        });

        const { sessionId } = await createPaymentSession(
          cartItems,
          deliveryInfo
        );

        setSnackbarMessage("Order placed successfully!");
        setSnackbarOpen(true);

        // Clear form and cart data after placing order
        setDeliveryInfo({
          name: "",
          email: "",
          phone: "",
          city: "",
          state: "",
          zip: "",
          address: "",
        });
        setCartItems([]); // Clear the cart from state
        localStorage.removeItem("cartItems"); // Remove cart from localStorage
        setPaymentMethod("cash_on_delivery");
        setShowSuccess(true);

        await stripe.redirectToCheckout({ sessionId });
      } catch (error) {
        console.error("Error during online payment:", error);
      }
    }
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <Box className="myContainer" sx={{ padding: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <DeliveryInformation
            deliveryInfo={deliveryInfo}
            setDeliveryInfo={setDeliveryInfo}
            validateFields={validateFields}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <OrderSummary
            cartItems={cartItems}
            handleQuantityChange={handleQuantityChange}
            handleRemoveItem={handleRemoveItem}
          />
        </Grid>
      </Grid>

      <PaymentMethod
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        handleOrderConfirm={handleOrderConfirm}
      />

      <Snackbar
        open={showSuccess}
        autoHideDuration={4000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Your Order has been placed successfully
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Cart;
