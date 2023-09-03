import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";
import AdoptHeader from "../../../../images/AdoptHeader.png";
import React from "react";

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

          <Box>
            <Typography
              variant="h6"
              pb={3}
              color="primary.para"
              sx={{ fontWeight: "700" }}
            >
              Looking for a Pet? Start your search here!
            </Typography>

            <Button
              variant="contained"
              color="success"
              size="large"
              sx={{ width: "70%" }}
              href="/adoption/adoptable_pets"
            >
              Explore Adoptable Pets
            </Button>
          </Box>
        </Stack>

        <Box flex={1}>
          <img src={AdoptHeader} alt="" style={{ width: "100%" }} />
        </Box>
      </BrandingWrapper>
    </Box>
  );
};

export default AdoptionBanner;
