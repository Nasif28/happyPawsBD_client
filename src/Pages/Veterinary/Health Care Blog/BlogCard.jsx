import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const BlogCard = ({ title, excerpt, link, image }) => {
  return (
    <Card
      sx={{
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          objectFit: "cover",
        }}
      />
      <CardContent
        sx={{
          backgroundColor: "#f9f9f9",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#ff6f61", // Eye-catching color for the title
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {excerpt}
        </Typography>
        <Button
          variant="contained"
          href={link}
          target="_blank"
          sx={{
            backgroundColor: "#3f51b5", // Blue color for the button
            color: "#fff",
            "&:hover": {
              backgroundColor: "#5c6bc0", // Darker blue on hover
            },
            borderRadius: "20px",
          }}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
