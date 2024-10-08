import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Card, CardMedia, Link, Stack, Typography } from "@mui/material";
import vets from "./../../API/vets.json";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Custom Left Arrow
const CustomLeftArrow = ({ onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      position: "absolute",
      left: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      color: "#fff",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: "8px",
      cursor: "pointer",
      zIndex: 1,
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      },
    }}
  >
    <ArrowBackIos />
  </Box>
);

// Custom Right Arrow
const CustomRightArrow = ({ onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      color: "#fff",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      zIndex: 1,
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      },
    }}
  >
    <ArrowForwardIos />
  </Box>
);

// Custom Dot
const CustomDot = ({ onClick, ...rest }) => {
  const { active } = rest;
  return (
    <li
      onClick={onClick}
      style={{
        backgroundColor: active ? "green" : "#E0E0E0",
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        display: "inline-block",
        margin: "0 8px",
        cursor: "pointer",
      }}
    />
  );
};

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

      <Box sx={{ position: "relative" }}>
        <Carousel
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          customDot={<CustomDot />}
          width="50%"
          containerClass="carousel-container"
          itemClass="carousel-item"
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={2000}
          centerMode={true}
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          showDots={true}
          slidesToSlide={1}
          swipeable
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
        >
          {vets.map((item) => (
            <Box
              key={item.id}
              position="relative"
              sx={{
                width: 250,
                height: 150,
                margin: "40px 0px",
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
                      cursor: "pointer",
                    }}
                  >
                    <Link href={item.details} underline="none" color="inherit">
                      - Learn More
                    </Link>
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
