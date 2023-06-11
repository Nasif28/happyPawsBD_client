import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const Vat_Care = () => {
  const BrandingWrapper = styled(Box)(({ theme }) => ({
    height: "70vh",
    backgroundColor: "rgba(122, 178, 89, 0.15)",
    padding: theme.spacing(4),
    margin: "1rem 0",
    // clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "1rem",
  }));

  return (
    <Box className="myContainer">
      <BrandingWrapper>
        <Stack spacing={5} sx={{ p: 4 }} flex={1}>
          <Typography
            variant="h3"
            color="primary.headline"
            sx={{ lineHeight: 1.2, fontWeight: "900" }}
          >
            Great Pet Care at your fingertips
          </Typography>

          <Typography variant="body1" color="primary.para" sx={{ lineHeight: 1.5 }}>
            With vet-backed petcare products, guidance, and Rewards – <br />we’re here
            to support your pet’s health in every way we can.
          </Typography>

          <Button
            variant="contained"
            color="success"
            size="large"
            aria-label="large button group"
            sx={{ width: "50%" }}
          >
            Donate
          </Button>
        </Stack>

        <Box flex={1.1}>
          <img
            src="./../../../images/vat-care.png"
            alt="Vat care"
            style={{ width: "100%" }}
          />
        </Box>
      </BrandingWrapper>
    </Box>
  );
};

export default Vat_Care;
