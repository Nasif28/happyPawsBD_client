import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const Newsletter = () => {
  return (
    <Box textAlign="center">
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#333", textTransform: "uppercase" }}
      >
        Subscribe to Our Pet Health Newsletter!
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ color: "#555", marginBottom: 3 }}
      >
        Stay updated with the latest pet health tips, expert advice, and special
        offers.
      </Typography>
      <form
        noValidate
        autoComplete="off"
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
        <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
          }}
        />
        <Button
          variant="contained"
          size="large"
          sx={{
            marginTop: 2,
            paddingX: 5,
            paddingY: 1.5,
            background: "linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "24px",
            "&:hover": {
              background: "linear-gradient(135deg, #ff6a5e 0%, #fe9f6b 100%)",
            },
          }}
        >
          Subscribe
        </Button>
      </form>
    </Box>
  );
};

export default Newsletter;
