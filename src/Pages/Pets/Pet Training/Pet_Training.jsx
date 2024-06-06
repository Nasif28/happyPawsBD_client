import React from "react";
import PetTrainingBanner from "./PetTrainingBanner";
import TrainingMenu from "./TrainingMenu";
import { Box } from "@mui/material";

const Pet_Training = () => {
  return (
    <>
      <Box className="myContainer">
        <PetTrainingBanner />
        <TrainingMenu />
      </Box>
    </>
  );
};

export default Pet_Training;
