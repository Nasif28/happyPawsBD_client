import React from "react";
import { Box, Typography } from "@mui/material";

const ShopBanner = () => {
  return (
    <Box
      sx={{
        height: "400px",
        backgroundImage: "url(https://i.ibb.co/RY2WrWx/Pet-Food-Trends-Main-Banner-png.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "Green",
        textAlign: "center",
      }}
    >
      <Typography variant="h2">Welcome to Pet Shop</Typography>
    </Box>
  );
};

export default ShopBanner;
