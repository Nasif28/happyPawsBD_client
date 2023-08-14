import { Box } from "@mui/material";
import React from "react";
import RescueBanner from "./RescueBanner";
import RescueDetails from "./RescueDetails";
import RescueForm from "./RescueForm";

const RescueAlert = () => {
  return (
    <Box>
      <RescueBanner />
      <RescueDetails />
      <RescueForm />
    </Box>
  );
};

export default RescueAlert;
