import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const Demo = () => {
  return (
    <Box className="myContainer">
      {/* <Box p={5} position="relative">
        <Box
          sx={{
            width: 300,
            height: 180,
          }}
        >
          <CardMedia
            component="img"
            src="./../../../images/vat.png"
            alt="Image"
            sx={{
              width: "120px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              left: "-10px",
              top: "55px",
            }}
          />
          <Card
            sx={{
              display: "flex",
              width: "100%",
              height: "100%",
              boxShadow: 4,
              paddingLeft: "80px",
            }}
          >
            <CardContent sx={{ textAlign: "left" }}>
              <Typography variant="h6" fontWeight={700} component="div">
                Elizabeth Racine, DVM
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dr. Elizabeth Racine is a small animal veterinarian with...
              </Typography>
              <Link variant="body2" href="www.google.com">
                Learn More
              </Link>
            </CardContent>
          </Card>
        </Box>
      </Box> */}
    </Box>
  );
};

export default Demo;
