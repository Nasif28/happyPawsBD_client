import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";
import RescueAlertBanner from "../../../../images/RescueAlertBanner.png";
import React from "react";
// import AdoptionForm from "./AdoptionForm";

const BrandingWrapper = styled(Box)(({ theme }) => ({
  height: "60vh",
  backgroundColor: "rgba(122, 178, 89, 0.15)",
  padding: theme.spacing(4),
  margin: "1rem 0",
  // clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
  display: "flex",
  justifyContent: "space-between",
}));

const RescueBanner = () => {
  return (
    <Box className="myContainer">
      {/* <img src={AdoptHeader} alt="" /> */}
      <BrandingWrapper>
        <Stack spacing={4} sx={{ p: 4 }} flex={1.2}>
          <Typography
            variant="h4"
            color="primary.headline"
            sx={{ lineHeight: 1.4, fontWeight: "900" }}
          >
            Let US Know <br /> If You Find Any Animal <br /> That Need to be
            Rescued
          </Typography>

          <Typography
            variant="h6"
            color="primary.para"
            sx={{ fontWeight: "700" }}
          >
            Work With Us. Be a Rescuer
          </Typography>

          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ width: "30%" }}
            // href="/adoption/adoption_form"
          >
            Join Us
          </Button>
        </Stack>

        <Box flex={1} pt={2}>
          <img src={RescueAlertBanner} alt="" style={{ width: "90%" }} />
        </Box>
      </BrandingWrapper>
    </Box>
  );
};

export default RescueBanner;
