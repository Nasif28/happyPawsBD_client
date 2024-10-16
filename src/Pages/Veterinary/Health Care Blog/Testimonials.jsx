import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const testimonials = [
  {
    name: "Sarah",
    content:
      "Thanks to the advice I found here, my dog’s energy has improved, and he’s healthier than ever!",
  },
  {
    name: "Mark",
    content:
      "I had no idea about dental care for pets until I read the blog. Now, my cat’s teeth are in great shape!",
  },
];

const Testimonials = () => {
  return (
    <div>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#ff6f61",
          marginBottom: "1rem",
        }}
      >
        What Our Readers Say
      </Typography>
      <Grid container spacing={3}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper
              sx={{
                padding: "1.5rem",
                borderRadius: "10px",
                backgroundColor: "#f5f5f5",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "#ffecb3",
                },
              }}
            >
              <Typography
                variant="body1"
                paragraph
                sx={{ fontStyle: "italic", color: "#333" }}
              >
                "{testimonial.content}"
              </Typography>
              <Typography
                variant="subtitle1"
                align="right"
                sx={{ fontWeight: "bold", color: "#ff6f61" }}
              >
                - {testimonial.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Testimonials;
