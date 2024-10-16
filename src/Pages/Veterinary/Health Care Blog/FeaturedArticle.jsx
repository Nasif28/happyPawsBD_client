import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const FeaturedArticle = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        background: "linear-gradient(to right, #ffecd2, #fcb69f)", // Gradient background
        borderRadius: "16px",
        padding: 4,
        boxShadow: 3,
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <img
            src="https://smb.ibsrv.net/imageresizer/image/article_manager/1200x1200/24863/1124967/heroimage0.951364001709243835.jpg"
            alt="The Ultimate Guide to Pet Vaccinations"
            style={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Image shadow for depth
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#4A4A4A", // Dark gray color for the title
              mb: 2,
            }}
          >
            The Ultimate Guide to Pet Vaccinations: What You Need to Know
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ color: "#555", lineHeight: 1.6 }}
          >
            Vaccinations are one of the most important ways to protect your pet
            from life-threatening diseases. Learn more about the essential
            vaccines your pets need, why they're important, and when to schedule
            them.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="https://www.glastonburyanimalhospital.com/blog/1124967-decoding-pet-vaccinations-a-pet-owners-essential-guide"
           target="_blank"
            sx={{
              backgroundColor: "#ff6f61", // Soft coral color for button
              color: "white",
              paddingX: 4,
              paddingY: 1.5,
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#ff3b2f", // Darker coral on hover
              },
              boxShadow: "0 4px 12px rgba(255, 111, 97, 0.4)", // Soft shadow effect
            }}
          >
            Read More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturedArticle;
