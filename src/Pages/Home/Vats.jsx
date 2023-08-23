import { Box, Card, CardMedia, Link, Stack, Typography } from "@mui/material";
import { Carousel } from "@trendyol-js/react-carousel";
import vets from "./../../API/vets.json";
import React from "react";

const Vats = () => {
  return (
    <Box className="myContainer" my={20} textAlign={"center"}>
      <Typography
        variant="h4"
        color="primary.headline"
        m={4}
        sx={{ lineHeight: 1.2, fontWeight: "900" }}
      >
        Meet Our Veterinary Authors
      </Typography>

      <Typography variant="body1" color="primary.para">
        Veterinarians are at the core of Great Pet Care. These caring
        professionals write articles, review content <br /> for medical
        accuracy, and provide trusted information and insight. Meet some of our
        pet health partners.{" "}
      </Typography>

      <Box mt={5}>
        <Carousel
          show={3}
          slide={3}
          transition={0.5}
          swiping={true}
          leftArrow="←"
          rightArrow="→"
        >
          {vets.map((item) => (
            <Box
              position="relative"
              sx={{
                width: 250,
                height: 150,
                margin: "20px 60px",
              }}
            >
              <CardMedia
                component="img"
                image={item.picture}
                alt={item.name}
                sx={{
                  width: "100px",
                  height: "130px",
                  objectFit: "cover",
                  borderRadius: ".6rem",
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  left: "-35px",
                  top: "10px",
                }}
              />
              <Card
                sx={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  borderRadius: ".5rem",
                  boxShadow: "0px 0px 10px 5px rgba(82,82,82,0.2)",
                  padding: "30px 15px 0px 75px",
                }}
              >
                <Stack spacing={0}>
                  <Typography
                    sx={{ textAlign: "left" }}
                    variant="h6"
                    fontSize={18}
                    fontWeight={700}
                    component="div"
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{ textAlign: "left" }}
                    variant="h6"
                    fontSize={12}
                    fontWeight={700}
                    component="div"
                  >
                    {item.specialization}
                  </Typography>
                  <Link
                    variant="body2"
                    fontSize={11}
                    sx={{ textAlign: "end", textDecoration: "none", mt:"5" }}
                    href="www.google.com"
                  >
                    Learn More
                  </Link>
                </Stack>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Vats;
