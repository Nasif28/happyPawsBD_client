import React, { useEffect, useState } from "react";
import { Alert, Box, Grid, Snackbar } from "@mui/material";
import DeliveryInformation from ".//DeliveryInformation";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import axios from "axios";
import { orders } from "../../../API/api";

const Cart = ({
  handleQuantityChange,

  // handleRemoveItem,
  // handleOrderConfirm,
}) => {
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
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Snackbar state
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Snackbar message
  const [showSuccess, setShowSuccess] = useState(false);

  // Load cart items from Local Storage on initial render
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
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleOrderConfirm = async () => {
    if (!validateFields()) {
      alert("Please fill in all required delivery information.");
      return;
    }

    try {
      const orderDetails = {
        deliveryInfo: deliveryInfo,
        orderSummary: {
          items: cartItems,
          total: calculateTotal(),
        },
        paymentMethod: paymentMethod,
      };

      await orders(orderDetails);

      // axios
      //   .post("http://localhost:5000/cart/orders", orderDetails)
      //   .then((response) => {
      //     console.log("Order successful:", response.data);

      // Show success notification
      setSnackbarMessage("Order placed successfully!");
      setSnackbarOpen(true);

      // Clear the delivery information, order summary, and payment method
      setDeliveryInfo({
        name: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        zip: "",
        address: "",
      });
      setCartItems([]); // Clear the cart items
      setPaymentMethod("cash_on_delivery"); // Reset payment method or set to default

      // Optionally, you can also remove items from local storage
      localStorage.removeItem("cartItems");
      setShowSuccess(true);
    } catch (error) {
      console.error("Error:", error);
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

      {/* Snackbar for showing the success message */}
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
