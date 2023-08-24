import styled from "@emotion/styled";
import { Box, Button, ButtonGroup, Stack, Typography } from "@mui/material";
import React from "react";

const BrandingWrapper = styled(Box)(({ theme }) => ({
  height: "70vh",
  backgroundColor: "rgba(122, 178, 89, 0.15)",
  padding: theme.spacing(4),
  margin: "1rem 0",
  clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
  display: "flex",
  justifyContent: "space-between",
}));

const Branding = () => {
  return (
    <Box className="myContainer">
      <BrandingWrapper>
        <Stack spacing={6} sx={{ p: 4 }} flex={1.2}>
          <Typography
            variant="h3"
            color="primary.headline"
            sx={{ lineHeight: 1.2, fontWeight: "900" }}
          >
            100% Committed to Your Pet's Health
          </Typography>

          <Typography
            variant="body1"
            color="primary.para"
            sx={{ lineHeight: 1.5 }}
          >
            With vet-backed petcare products, guidance, and Rewards – <br />
            we’re here to support your pet’s health in every way we can
          </Typography>

          <ButtonGroup
            variant="contained"
            color="success"
            size="large"
            aria-label="large button group"
            sx={{ width: "80%" }}
          >
            <Button
              href="/adoption/adoptable_pets"
              sx={{ flex: "1", fontWeight: "700" }}
            >
              Adopt
            </Button>
            <Button href="/make_donation" sx={{ flex: "1", fontWeight: "700" }}>
              Donate
            </Button>
            <Button href="/volunteer" sx={{ flex: "1", fontWeight: "700" }}>
              Join Us
            </Button>
          </ButtonGroup>
        </Stack>

        <Box flex={1}>
          <img
            src="./../../../images/banner2.png"
            alt=""
            style={{ width: "100%" }}
          />
        </Box>
      </BrandingWrapper>
    </Box>
  );
};

export default Branding;
