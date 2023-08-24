import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SmsFailedOutlinedIcon from "@mui/icons-material/SmsFailedOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";

const Make_Difference = () => {
  return (
    <Box
      className="myContainer"
      height="75vh"
      backgroundColor="primary.back"
      my="20px"
      borderRadius=".3rem"
      textAlign={"center"}
    >
      <Typography
        variant="h4"
        color="primary.headline"
        py={6}
        sx={{ lineHeight: 1.2, fontWeight: "900" }}
      >
        You Can Make a Difference
      </Typography>

      {/* 3 Box Starts -------------------------------------------------------- */}
      <Stack direction="row" justifyContent="space-evenly" alignItems="center">
        {/* 1 Box Starts -----------------------------------------------------------  */}
        <a style={{ textDecoration: "none" }}>
          <Stack
            spacing={3}
            p={3}
            sx={{
              width: 320,
              height: 320,
              backgroundColor: "#DDB5F9",
              opacity: "10",
              alignItems: "center",
              color: "white",
              "&:hover": {
                boxShadow: "10px 10px 10px 0px rgba(82,82,82,0.2)",
              },
            }}
          >
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: "100%",
                backgroundColor: "#6C00AE",
              }}
            >
              <PetsOutlinedIcon
                sx={{
                  width: 65,
                  height: 75,
                  margin: 1,
                }}
              ></PetsOutlinedIcon>
            </Box>

            <Typography
              variant="h4"
              sx={{ lineHeight: 1.2, fontWeight: "bold" }}
            >
              Donate
            </Typography>

            <Typography variant="body1">
              Every dollar can make a difference for an animal in need. Join the
              ASPCA by making a gift today.
            </Typography>
          </Stack>
        </a>

        {/* 2 Box Starts -----------------------------------------------------------  */}
        <a style={{ textDecoration: "none" }}>
          <Stack
            spacing={3}
            p={3}
            sx={{
              width: 320,
              height: 320,
              backgroundColor: "white",
              opacity: "10",
              alignItems: "center",
              color: "black",
              "&:hover": {
                boxShadow: "10px 10px 10px 0px rgba(82,82,82,0.2)",
              },
            }}
          >
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: "100%",
                backgroundColor: "#B9FFF7",
              }}
            >
              <SmsFailedOutlinedIcon
                sx={{
                  width: 60,
                  height: 60,
                  margin: 2.7,
                }}
              ></SmsFailedOutlinedIcon>
            </Box>

            <Typography
              variant="h4"
              sx={{ lineHeight: 1.2, fontWeight: "bold" }}
            >
              Advocate
            </Typography>
            <Typography variant="body1">
              Speak up for animals and learn how to be a strong, effective
              advocate.
            </Typography>
          </Stack>
        </a>

        {/* 3 Box Starts -----------------------------------------------------------  */}
        <a style={{ textDecoration: "none" }}>
          <Stack
            spacing={3}
            p={3}
            sx={{
              width: 320,
              height: 320,
              backgroundColor: "#ABB6FF",
              opacity: "10",
              alignItems: "center",
              color: "white",
              "&:hover": {
                boxShadow: "10px 10px 10px 0px rgba(82,82,82,0.2)",
              },
            }}
          >
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: "100%",
                backgroundColor: "#002776",
              }}
            >
              <CalendarMonthOutlinedIcon
                sx={{
                  width: 65,
                  height: 65,
                  margin: 2,
                }}
              ></CalendarMonthOutlinedIcon>
            </Box>

            <Typography
              variant="h4"
              sx={{ lineHeight: 1.2, fontWeight: "bold" }}
            >
              Give Monthly
            </Typography>

            <Typography variant="body1">
              Monthly giving is the easiest and most efficient way to make a
              adifference for animals.
            </Typography>
          </Stack>
        </a>
      </Stack>
    </Box>
  );
};

export default Make_Difference;
