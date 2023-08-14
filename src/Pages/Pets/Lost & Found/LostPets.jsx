import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { getLostPets } from "../../../API/api";
import LostPetPic from "../../../../images/LostPet.png";

const LostPets = () => {
  const [lostPets, setLostPets] = useState([]);

  const {
    petName,
    animalType,
    breed,
    age,
    weight,
    colors,
    distinctiveFeatures,
    gender,
    ownerName,
    contactPhone,
    contactEmail,
    lastSeenLocation,
    lostDate,
    description,
  } = lostPets;

  useEffect(
    () => async () => {
      let response = await getLostPets();
      setLostPets(response.data);
    },
    []
  );

  return (
    <Box className="myContainer" my={5}>
      <Box
        color="white"
        borderRadius={2}
        p={2}
        my={5}
        textAlign={"center"}
        backgroundColor={"primary.para"}
      >
        <Typography variant="h4" fontWeight={900} pb={2}>
          All Lost Pets
        </Typography>

        <Typography variant="" fontWeight={500}>
          If You Found Any Pet Bellow <br /> Contact The Owner
        </Typography>
      </Box>

      {/* Card Section Starts ----------------------------------------------------  */}
      <Stack my={3}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* {adoptableAnimals.slice(0, 6).map((item) => ( */}
          {lostPets.map((pet) => (
            <Grid item xs={2} sm={4} md={4} key={pet._id}>
              <Card
                sx={{
                  boxShadow: "none",
                  backgroundColor: "#FBFBFB",
                  "&:hover": {
                    boxShadow: "10px 10px 10px 0px rgba(82,82,82,0.2)",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // image={LostPetPic}
                    image={pet.petPicture}
                    // alt={item.name}
                    height={200}
                  />
                  <CardContent>
                    <Divider>PET INFO</Divider>
                    <Typography gutterBottom fontWeight={700}>
                      Pet Name: {pet.petName}
                    </Typography>

                    <Typography variant="body2" color="primary.para">
                      Type: {pet.animalType}
                    </Typography>

                    <Typography variant="body2" color="primary.para">
                      Breed: {pet.breed}
                    </Typography>

                    <Typography variant="body2" color="primary.para">
                      Color: {pet.colors}
                    </Typography>

                    <Typography variant="body2" color="primary.para">
                      Lost Location: {pet.lastSeenLocation}
                    </Typography>

                    <Typography variant="body2" color="primary.para">
                      Lost Date: {pet.lostDate}
                    </Typography>

                    <Divider>OWNER INFO</Divider>

                    <Typography variant="body2" fontWeight={700}>
                      Owner Name: {pet.ownerName}
                    </Typography>

                    <Typography variant="body2" color="primary.para">
                      Contact: {pet.contactPhone}
                    </Typography>

                    {/* <Typography
                      variant="body2"
                      color="primary.green"
                      textAlign={"right"}
                    >
                      - Read More
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export default LostPets;
