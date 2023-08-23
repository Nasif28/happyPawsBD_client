import { Box } from "@mui/material";
import React from "react";
import RescueBanner from "./RescueBanner";
import RescueDetails from "./RescueDetails";

const RescueAlert = () => {
  return (
    <Box>
      <RescueBanner />
      <RescueDetails />
    </Box>
  );
};

export default RescueAlert;
