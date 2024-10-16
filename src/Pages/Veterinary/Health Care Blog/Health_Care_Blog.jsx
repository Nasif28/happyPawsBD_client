import React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import FeaturedArticle from "./FeaturedArticle";
import HealthTips from "./HealthTips";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";
import BlogCard from "./BlogCard";

const Health_Care_Blog = () => {
  return (
    <Box maxWidth="lg" className="myContainer">
      {/* Hero Section */}
      <Box
        textAlign="center"
        py={8}
        sx={{
          background: "linear-gradient(to right, #ff7e5f, #feb47b)",
          borderRadius: 3,
          color: "white",
          boxShadow: 3,
          mb: 6,
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
          Caring for Your Pets <br /> One Step at a Time
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
          Get expert advice, tips, and tricks to keep your furry friends healthy
          and happy.
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="https://www.gopetfriendly.com/blog/"
          target="_blank"
          sx={{
            backgroundColor: "#fff",
            color: "#ff7e5f",
            "&:hover": {
              backgroundColor: "#ff7e5f",
              color: "#fff",
            },
          }}
        >
          Read Our Latest Articles
        </Button>
      </Box>

      {/* Recent Blog Posts */}
      <Box py={5}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333", mb: 4 }}
        >
          Recent Blog Posts
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard
              title="The Best Foods for a Healthy Pet Diet"
              excerpt="Discover the top 10 foods that can help your pets lead a healthier, longer life."
              link="https://www.carecredit.com/well-u/pet-care/healthy-food-for-dogs/"
              image="https://www.medivetgroup.com/globalassets/assets/shutterstock-and-istock/dog-eating-out-of-bowl.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard
              title="How to Keep Your Pet Hydrated During Hot Weather"
              excerpt="Learn how to ensure your pets stay hydrated with these simple tips."
              link="https://www.medivetgroup.com/pet-care/pet-advice/10-tips-to-care-for-your-dog-in-the-heat/#:~:text=Keep%20them%20hydrated&text=Providing%20lots%20of%20fresh%2C%20clean,and%20flavouring%20their%20drinking%20water."
              image="https://pvecvets.com/wp-content/uploads/2021/08/hydrated-dog-in-lakeland-fl-300x200.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard
              title="5 Common Health Issues in Cats and How to Prevent Them"
              excerpt="Cats can suffer from certain health problems as they age. Learn about the most common issues."
              link="https://www.hamiltonrdanimalhospital.com/blog/941550-common-cat-diseases-and-how-to-prevent-them"
              image="https://jollypets.com/cdn/shop/articles/common_health_problems_in_cats_2000x.png"
            />
          </Grid>
        </Grid>
      </Box>

      {/* Featured Article */}
      <Box pb={6}>
        <FeaturedArticle />
      </Box>

      {/* Health Tips */}
      <Box
        p={4}
        sx={{
          background: "#C0C78C",
          borderRadius: 3,
          boxShadow: 3,
          mb: 6,
        }}
      >
        <HealthTips />
      </Box>

      {/* Testimonials */}
      <Box
        py={6}
        sx={{
          backgroundColor: "#ffe082",
          borderRadius: 3,
          boxShadow: 3,
          mb: 6,
          p: 5,
        }}
      >
        <Testimonials />
      </Box>

      {/* Newsletter */}
      <Box
        p={6}
        sx={{ backgroundColor: "#e1bee7", borderRadius: 3, boxShadow: 3 }}
      >
        <Newsletter />
      </Box>
    </Box>
  );
};

export default Health_Care_Blog;
