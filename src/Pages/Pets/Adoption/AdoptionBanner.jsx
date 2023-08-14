import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";
import AdoptHeader from "../../../../images/AdoptHeader.png";
import React from "react";
import AdoptionForm from "./AdoptionForm";

const BrandingWrapper = styled(Box)(({ theme }) => ({
  height: "60vh",
  backgroundColor: "rgba(122, 178, 89, 0.15)",
  padding: theme.spacing(4),
  margin: "1rem 0",
  clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
  display: "flex",
  justifyContent: "space-between",
}));

const AdoptionBanner = () => {
  return (
    <Box className="myContainer">
      {/* <img src={AdoptHeader} alt="" /> */}
      <BrandingWrapper>
        <Stack spacing={6} sx={{ p: 4 }} flex={1.5}>
          <Typography
            variant="h4"
            color="primary.headline"
            sx={{ lineHeight: 1.5, fontWeight: "900" }}
          >
            When you’re ready to show love, they’re ready to give it.
          </Typography>

          <Typography
            variant="h6"
            color="primary.para"
            sx={{ lineHeight: 1.5, fontWeight: "700" }}
          >
            Looking for a pet? Start your search here!
          </Typography>

          {/* <ButtonGroup
            variant="contained"
            color="success"
            size="large"
            aria-label="large button group"
            sx={{ width: "80%" }}
          >
            <Button sx={{ flex: "1" }}>Adopt</Button>
            <Button sx={{ flex: "1" }}>Donate</Button>
            <Button sx={{ flex: "1" }}>Join Us</Button>
          </ButtonGroup> */}

          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ width: "70%" }}
            href="/adoption/adoption_form"
          >
            Submit Application for Adoption
          </Button>
        </Stack>

        <Box flex={1}>
          <img src={AdoptHeader} alt="" style={{ width: "100%" }} />
        </Box>
      </BrandingWrapper>
    </Box>
  );
};

export default AdoptionBanner;
