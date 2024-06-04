import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";
import vets from "./../../API/vets.json";
import styled from "@emotion/styled";

const Vats = () => {
  return (
    <Box className="myContainer" my={10} textAlign={"center"}>
      <Typography
        variant="h4"
        color="primary.headline"
        p={4}
        sx={{ lineHeight: 1.2, fontWeight: "900" }}
      >
        Meet Our Veterinary Authors
      </Typography>

      <Typography variant="body1" color="primary.para" px={4}>
        Veterinarians are at the core of Great Pet Care. These caring
        professionals write articles, review content <br /> for medical
        accuracy, and provide trusted information and insight. Meet some of our
        pet health partners.
      </Typography>

      <Box mt={5} sx={{ position: "relative" }}>
        <Carousel
          width="50%"
          containerClass="carousel-container"
          itemClass="carousel-item"
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={2000}
          centerMode={true}
          className=""
          // containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          // itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1224,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 900,
                min: 600,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            minimobile: {
              breakpoint: {
                max: 600,
                min: 0,
              },

              items: 0.6,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1224,
                min: 900,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {vets.map((item) => (
            <Box
              key={item.id}
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

                  <Typography
                    sx={{ textAlign: "left" }}
                    variant="h6"
                    fontSize={11}
                    fontWeight={500}
                    component="div"
                  >
                    {item.location}
                  </Typography>

                  <Typography
                    sx={{ textAlign: "left" }}
                    variant="h6"
                    fontSize={11}
                    fontWeight={500}
                    component="div"
                  >
                    {item.contact}
                  </Typography>

                  <Box
                    position="absolute"
                    bottom="10px"
                    right="10px"
                    variant="body2"
                    fontSize={11}
                    color={"primary.green"}
                    sx={{
                      textDecoration: "none",
                    }}
                    // href="www.google.com"
                  >
                    - Learn More
                  </Box>
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
