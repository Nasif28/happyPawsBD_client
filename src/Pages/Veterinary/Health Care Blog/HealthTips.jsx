import React from "react";
import { Grid, Typography, Paper, Box } from "@mui/material";

const tips = [
  {
    title: "Emergency Care for Pets",
    description: "What to do in case of an emergency,  choking to poisoning.",
  },
  {
    title: "Dental Health for Pets",
    description:
      "5 signs of dental problems and how to maintain  pet’s hygiene.",
  },
  {
    title: "Health Exercise Tips",
    description: "How much exercise does your pet need daily?",
  },
  {
    title: "Seasonal Health Care",
    description: "How to protect your pet from seasonal allergies and bugs.",
  },
];

const HealthTips = () => {
  return (
    <Box sx={{ paddingY: 5 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "white",
          marginBottom: 4,
          textTransform: "uppercase",
        }}
      >
        Health Tips & Quick Guides
      </Typography>

      <Grid container spacing={3}>
        {tips.map((tip, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                padding: 3,
                textAlign: "center",
                background: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 6px 25px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "#333",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  mb: 1,
                }}
              >
                {tip.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ color: "#555", lineHeight: 1.6 }}
              >
                {tip.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HealthTips;
