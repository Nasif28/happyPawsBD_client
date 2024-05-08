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
import Training from "./../../../API/training.json";
import React from "react";

const TrainingMenu = () => {
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
      <Stack my={3}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Training.map((item) => (
            <Grid item xs={2} sm={4} md={4} key={item.id}>
              <Card
                sx={{
                  height: 400,
                  boxShadow: "none",
                  backgroundColor: "#FBFBFB",
                  "&:hover": {
                    boxShadow: "10px 10px 10px 0px rgba(82,82,82,0.2)",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={item.picture}
                    alt={item.title}
                    height="200"
                  />
                  <CardContent>
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
