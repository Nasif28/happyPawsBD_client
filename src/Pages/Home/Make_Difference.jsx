import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Make_Difference = () => {
  return (
    <Box
      className="myContainer"
      height="75vh"
      backgroundColor="primary.back"
      my="5rem"
      p={2}
      borderRadius=".3rem"
      textAlign={"center"}
    >
      <Typography
        variant="h4"
        color="primary.headline"
        m={4}
        pb={2}
        sx={{ lineHeight: 1.2, fontWeight: "900" }}
      >
        You Can Make a Difference
      </Typography>

      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <a href="./" style={{ textDecoration: "none" }}>
          <Stack
            spacing={4}
            p={2}
            sx={{
              width: 320,
              height: 320,
              backgroundColor: "primary.yellow",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "primary",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: "100%",
                backgroundColor: "primary.green",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            ></Box>
            <Typography
              variant="h4"
              color="primary.headline"
              sx={{ lineHeight: 1.2, fontWeight: "bold" }}
            >
              Donate
            </Typography>
            <Typography variant="body1" color="primary.para">
              Every dollar can make a difference for an animal in need. Join the
              ASPCA by making a gift today.
            </Typography>
          </Stack>
        </a>
        <a href="./" style={{ textDecoration: "none" }}>
          <Stack
            spacing={4}
            p={2}
            sx={{
              width: 320,
              height: 320,
              backgroundColor: "primary.yellow",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "primary",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: "100%",
                backgroundColor: "primary.green",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            ></Box>
            <Typography
              variant="h4"
              color="primary.headline"
              sx={{ lineHeight: 1.2, fontWeight: "bold" }}
            >
              Donate
            </Typography>
            <Typography variant="body1" color="primary.para">
              Every dollar can make a difference for an animal in need. Join the
              ASPCA by making a gift today.
            </Typography>
          </Stack>
        </a>
        <a href="./" style={{ textDecoration: "none" }}>
          <Stack
            spacing={4}
            p={2}
            sx={{
              width: 320,
              height: 320,
              backgroundColor: "primary.yellow",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "primary",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: "100%",
                backgroundColor: "primary.green",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            ></Box>
            <Typography
              variant="h4"
              color="primary.headline"
              sx={{ lineHeight: 1.2, fontWeight: "bold" }}
            >
              Donate
            </Typography>
            <Typography variant="body1" color="primary.para">
              Every dollar can make a difference for an animal in need. Join the
              ASPCA by making a gift today.
            </Typography>
          </Stack>
        </a>
      
      </Stack>
    </Box>
  );
};

export default Make_Difference;
