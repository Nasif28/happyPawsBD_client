import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import adoptableAnimals from "./../../API/adoptableAnimals.json";

const Adoptable_Animals = () => {
  return (
    <Box className="myContainer" mb="20px" textAlign={"center"}>
      <Stack>
        <Typography
          variant="h4"
          color="primary.headline"
          my={5}
          sx={{ lineHeight: 1.2, fontWeight: "900" }}
        >
          Adoptable Animals
        </Typography>

        {/* Card Section Starts ----------------------------------------------------  */}
        <Stack my={3}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {adoptableAnimals.slice(0, 6).map((item) => (
              <Grid item xs={2} sm={4} md={4} key={item.rank}>
                <Card
                  sx={{
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
                      image={item.img}
                      alt={item.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" fontWeight={700}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" fontSize={11}>
                        - {item.origin}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="primary.para"
                        p={2}
                        maxHeight="140px"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        wordWrap="break-word"
                      >
                        {item.shortDescription}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="primary.green"
                        textAlign={"right"}
                      >
                        - Read More
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>

        {/* All Animal Button --------------------------------------------------------------  */}
        <Button
          variant="outlined"
          color="success"
          href="/adoption/adoptable_pets"
        >
          <Typography variant="button" fontWeight="bold">
            View All Adoptable Animals
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
};

export default Adoptable_Animals;
