import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import TrainingHero from "./../../../../images/Training Hero.png";
import React from "react";

const PetTrainingBanner = () => {
  return (
    <Box my={5} p={5}>
      <Grid container>
        <Grid xs={4}>
          <Box>
            <img
              src={TrainingHero}
              alt="Pet training Banner Picture"
              style={{ width: "90%", padding: "25px 0px" }}
            />
          </Box>
        </Grid>

        <Grid xs={8}>
          <Stack spacing={2}>
            <Typography
              variant="h4"
              pb={2}
              color="primary.headline"
              sx={{ fontWeight: "900" }}
            >
              Training
            </Typography>

            <Typography
              variant="h6"
              color="primary.para"
              sx={{ fontWeight: "500" }}
            >
              Happy Paws BD - Along with boarding and daycare, we offer a range
              of training programs integrated through all three services. See
              below for all our options.
            </Typography>

            <Typography
              variant="h6"
              pb={2}
              color="primary.para"
              sx={{ fontWeight: "500" }}
            >
              Pups, like kids, learn best when they’re having fun. That’s why we
              created an all-day “play school” for dogs ready to get serious
              about meeting new friends or learning new skills.
            </Typography>

            <Typography
              variant="h6"
              color="primary.headline"
              sx={{ fontWeight: "900" }}
            >
              Make A Reservation
            </Typography>

            <Button
              variant="contained"
              color="success"
              size="large"
              sx={{ width: "25%" }}
              href="/adoption/adoptable_pets"
            >
              Book Now
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PetTrainingBanner;
