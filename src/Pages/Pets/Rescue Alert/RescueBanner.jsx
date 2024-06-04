import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";
import RescueAlertBanner from "./../../../images/RescueAlertBanner.png";
import React from "react";
// import AdoptionForm from "./AdoptionForm";

const BrandingWrapper = styled(Box)(({ theme }) => ({
  // height: "50vh",
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
      <BrandingWrapper>
        <Stack spacing={4} sx={{ p: 4 }} flex={1.2}>
          <Typography
            variant="h4"
            color="primary.headline"
            sx={{ lineHeight: 1.4, fontWeight: "900" }}
          >
            Be a Hero <br /> Be Their Voice <br /> Report an Animal in Distress
          </Typography>

          {/* <Typography>
            Let US Know If You Find Any Animal That Need to be Rescued
          </Typography> */}

          <Box>
            <Typography
              variant="h6"
              pb={2}
              color="primary.para"
              sx={{ fontWeight: "700" }}
            >
              Work With Us. Be a Rescuer
            </Typography>

            <Button
              variant="contained"
              color="success"
              size="large"
              sx={{ width: { sx: "60%", md: "40%" } }}
              href="/volunteer"
            >
              Join Us
            </Button>
          </Box>
        </Stack>

        <Box
          flex={1.2}
          pt={4}
          sx={{
            display: { xs: "none", md: "block" }, // Hide the image on small screens
          }}
        >
          <img src={RescueAlertBanner} alt="" style={{ width: "80%" }} />
        </Box>
      </BrandingWrapper>
    </Box>
  );
};

export default RescueBanner;
