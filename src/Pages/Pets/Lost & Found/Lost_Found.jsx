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
        <Box flex="50%">
          <Typography
            variant="h4"
            color={"white"}
            backgroundColor="green"
            p={3}
            mb={1}
            sx={{ fontWeight: "900" }}
          >
            Lost A Pet!?
          </Typography>

          <Stack
            backgroundColor="primary.back"
            p={3}
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
                  REGISTER A LOST PET
                </Typography>

                <Typography variant="body1">
                  Fill out a form with your pet's details. We'll post it on the
                  wall if anyone finds your pet they will contact you.
                </Typography>
              </Stack>
            </a>

            {/* 2 Box Starts -----------------------------------------------------------  */}
            <a
              href="./lost_found/found_pets"
              style={{ textDecoration: "none" }}
            >
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
                  SEE ALL FOUND PETS
                </Typography>

                <Typography variant="body1">
                  Here you'll find all the posts about found pet animals by
                  different people
                </Typography>
              </Stack>
            </a>
          </Stack>
        </Box>

        {/* Found A Pet???--------------------------------------------------------- */}
        <Box flex="50%">
          <Typography
            variant="h4"
            p={3}
            mb={1}
            color={"white"}
            backgroundColor="green"
            sx={{ fontWeight: "900" }}
          >
            Found A Pet!?
          </Typography>

          <Stack
            backgroundColor="primary.back"
            p={3}
            // direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            divider={<Divider orientation="horizental" flexItem />}
          >
            {/* 1 Box Starts -----------------------------------------------------------  */}
            <a
              href="./lost_found/found_form"
              style={{ textDecoration: "none" }}
            >
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
                  REGISTER A FOUND PET
                </Typography>

                <Typography variant="body1">
                  Fill out a form about the pet you found. If someone finds
                  their lost pet here, they will contact you.
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
                  SEE ALL LOST PETS
                </Typography>

                <Typography variant="body1">
                  Here you'll find all the posts about Lost pet animals by their
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
