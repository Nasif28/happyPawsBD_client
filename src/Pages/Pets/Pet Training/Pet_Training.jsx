import React from "react";
import PetTrainingBanner from "./PetTrainingBanner";
import TrainingMenu from "./TrainingMenu";
import TrainingPricing from "./TrainingPricing";
import { Box } from "@mui/material";
import TrainingSubmit from "./TrainingSubmit";

const Pet_Training = () => {
  return (
    <>
      <Box className="myContainer">
        <PetTrainingBanner />
        <TrainingSubmit />
        <TrainingMenu />
        <TrainingPricing />
      </Box>
    </>
  );
};

export default Pet_Training;
