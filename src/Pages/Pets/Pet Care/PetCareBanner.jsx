import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";

const PetCareBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "600px",
        backgroundImage:
          'url("https://pawcare.com.bd/wp-content/uploads/2021/02/Our-Service.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          p: "8%",
          // top: "10%",
          // left: "50%",
          // transform: "translate(-50%, -50%)",
          color: "red",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" component="div">
          We provide the best services for our customers that puts your pet’s
          health first
        </Typography>
      </Box>
      <svg
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100px",
        }}
      >
        <path
          d="M0,0 C300,150 900,150 1200,0 L1200,200 L0,200 Z"
          fill="#f5f5f5"
        ></path>
        <path
          d="M0,30 C300,180 900,180 1200,30 L1200,200 L0,200 Z"
          fill="#ffffff"
        ></path>
        <path
          d="M0,60 C300,210 900,210 1200,60 L1200,200 L0,200 Z"
          fill="#f5f5f5"
        ></path>
      </svg>
    </Box>
  );
};

export default PetCareBanner;
