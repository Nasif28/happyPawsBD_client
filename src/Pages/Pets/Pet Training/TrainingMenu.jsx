import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Training from "./../../../API/training.json";

const TrainingMenu = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/training/${id}`);
  };

  return (
    <Box bgcolor={"rgba(122, 178, 89, 0.15)"} p={5}>
      <Typography
        variant="h4"
        color="primary.headline"
        sx={{ lineHeight: 1.5, fontWeight: "900", textAlign: "center" }}
      >
        Happy Paws BD Focuses On
      </Typography>

      {/* Traning Section Starts ----------------------------------------------------  */}
      <Stack my={3} alignItems="center">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          justifyContent="center"
          alignItems="center"
          columns={{ xs: 4, sm: 6, md: 12 }}
        >
          {Training.map((item) => (
            <Grid
            id="TrainingMenu"
              item
              xs={12}
              sm={6}
              md={4}
              key={item.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  // height: 400,
                  width: "100%", // Ensure full width within the grid item
                  boxShadow: "none",
                  backgroundColor: "#FBFBFB",
                  "&:hover": {
                    boxShadow: "10px 10px 10px 0px rgba(82,82,82,0.2)",
                  },
                }}
              >
                <CardActionArea onClick={() => handleCardClick(item.id)}>
                  <CardMedia
                    component="img"
                    image={item.picture}
                    alt={item.title}
                    height="200"
                  />
                  <CardContent
                    sx={{
                      height: 250, // Set your desired height here
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h6"
                      textAlign={"center"}
                      fontWeight={700}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="primary.para"
                      px={2}
                      maxHeight="140px"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      wordWrap="break-word"
                    >
                      {item.dis1}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="primary.para"
                      px={2}
                      py={1}
                      maxHeight="140px"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      wordWrap="break-word"
                    >
                      {item.dis2}
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={2}
                      mt={2}
                    >
                      <Typography
                        variant="body2"
                        color="primary.green"
                        textAlign={"left"}
                      ></Typography>
                      <Typography
                        variant="body2"
                        color="primary.green"
                        textAlign={"right"}
                      >
                        - Read More
                      </Typography>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export default TrainingMenu;
