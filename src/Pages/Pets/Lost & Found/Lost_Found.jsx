import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const Lost_Found = () => {
  return (
    <Box
      className="myContainer"
      // backgroundColor="primary.back"
      mt="20px"
      // borderRadius=".3rem"
      textAlign={"center"}
    >
      <Typography
        variant="h3"
        color="primary.headline"
        py={2}
        sx={{ fontWeight: "900" }}
      >
        Lost & Found Pets
      </Typography>

      {/* 2 Main Box Starts -------------------------------------------------------- */}

      <Stack
        // direction="row"
        // justifyContent="space-around"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={0.5}
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        paddingTop={3}
      >
        {/* Lost A Pet???--------------------------------------------------------- */}
        <Box backgroundColor="primary.back" p={3} flex="50%">
          <Typography
            variant="h4"
            color={"primary.green"}
            pb={5}
            sx={{ fontWeight: "900" }}
          >
            Lost A Pet!?
          </Typography>

          <Stack
            // direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            divider={<Divider orientation="horizental" flexItem />}
          >
            {/* 1 Box Starts -----------------------------------------------------------  */}
            <a href="./lost_found/lost_form" style={{ textDecoration: "none" }}>
              <Stack
                p={3}
                sx={{
                  // backgroundColor: "#DDB5F9",
                  borderLeft: "6px solid #7AB259",
                  // opacity: "10",
                  // alignItems: "center",
                  color: "black",
                  "&:hover": {
                    borderLeft: "6px solid #FBD062",
                    // boxShadow: "10px 10px 10px 10px rgba(82,82,82,0.2)",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  pb={2}
                  sx={{ lineHeight: 1.5, fontWeight: "900" }}
                >
                  Submit Lost Pet Form
                </Typography>

                <Typography variant="body1">
                  Fill a form with your pet details. We'll post it on site so
                  that anyone found your pet they can contact with you.
                </Typography>
              </Stack>
            </a>

            {/* 2 Box Starts -----------------------------------------------------------  */}
            <a href="./lost_found/found_pets" style={{ textDecoration: "none" }}>
              <Stack
                p={3}
                sx={{
                  // backgroundColor: "#DDB5F9",
                  borderLeft: "6px solid #7AB259",
                  // opacity: "10",
                  // alignItems: "center",
                  color: "black",
                  "&:hover": {
                    borderLeft: "6px solid #FBD062",
                    // boxShadow: "10px 10px 10px 10px rgba(82,82,82,0.2)",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  pb={2}
                  sx={{ lineHeight: 1.5, fontWeight: "900" }}
                >
                  See All Found Pets
                </Typography>

                <Typography variant="body1">
                  Here you'll find all the post about found pet animals by
                  different people
                </Typography>
              </Stack>
            </a>
          </Stack>
        </Box>

        {/* Found A Pet???--------------------------------------------------------- */}
        <Box backgroundColor="primary.back" p={3} flex="50%">
          <Typography
            variant="h4"
            pb={5}
            color={"primary.green"}
            sx={{ fontWeight: "900" }}
          >
            Found A Pet!?
          </Typography>

          <Stack
            // direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            divider={<Divider orientation="horizental" flexItem />}
          >
            {/* 1 Box Starts -----------------------------------------------------------  */}
            <a href="./lost_found/found_form" style={{ textDecoration: "none" }}>
              <Stack
                p={3}
                sx={{
                  // backgroundColor: "#DDB5F9",
                  borderLeft: "6px solid #7AB259",
                  // opacity: "10",
                  // alignItems: "center",
                  color: "black",
                  "&:hover": {
                    borderLeft: "6px solid #FBD062",
                    // boxShadow: "10px 10px 10px 10px rgba(82,82,82,0.2)",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  pb={2}
                  sx={{ lineHeight: 1.5, fontWeight: "900" }}
                >
                  Submit Found Pet Form
                </Typography>

                <Typography variant="body1">
                  Fill a form about the pet you found. We'll post it on site, if
                  anyone looking for a lost pet they will contact you.
                </Typography>
              </Stack>
            </a>

            {/* 2 Box Starts -----------------------------------------------------------  */}
            <a href="./lost_found/lost_pets" style={{ textDecoration: "none" }}>
              <Stack
                p={3}
                sx={{
                  // backgroundColor: "#DDB5F9",
                  borderLeft: "6px solid #7AB259",
                  // opacity: "10",
                  // alignItems: "center",
                  color: "black",
                  "&:hover": {
                    borderLeft: "6px solid #FBD062",
                    // boxShadow: "10px 10px 10px 10px rgba(82,82,82,0.2)",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  pb={2}
                  sx={{ lineHeight: 1.5, fontWeight: "900" }}
                >
                  See All Lost Pets
                </Typography>

                <Typography variant="body1">
                  Here you'll find all the post about Lost pet animals by their
                  owner
                </Typography>
              </Stack>
            </a>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Lost_Found;
