import React from "react";
import { useParams } from "react-router-dom";
import adoptableAnimals from "./../../../API/adoptableAnimals.json";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import {
  Vaccines,
  Cake,
  Palette,
  MonitorHeart,
  Place,
  Event,
} from "@mui/icons-material";
import AdoptionForm from "./AdoptionForm";

const AdoptablePetDetails = () => {
  const { code } = useParams();
  const pet = adoptableAnimals.find((item) => item.code === code);

  if (!pet) {
    return (
      <Typography variant="h5" color="error" textAlign="center">
        Pet not found!
      </Typography>
    );
  }

  return (
    <Box className="myContainer" sx={{ margin: "auto", p: 2, mt: 4 }}>
      <Grid container spacing={4}>
        {/* Pet Image Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            fontWeight={900}
            my={3}
            gutterBottom
            textAlign="center"
            color="primary.main"
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Meet "{pet.name}"
          </Typography>

          <Card
            sx={{
              borderRadius: "15px",
              boxShadow: "10px 10px 30px rgba(0,0,0,0.15)",
            }}
          >
            <CardMedia
              component="img"
              image={pet.photos}
              alt={pet.name}
              sx={{
                borderRadius: "15px 15px 0 0",
                // height: 400,
                objectFit: "cover",
              }}
            />
          </Card>
        </Grid>

        {/* Pet Details Section */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              py: 2,
              px: 4,
              backgroundColor: "#f3f3f3",
              borderRadius: "15px",
            }}
          >
            <CardContent>
              <Stack spacing={2}>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  color="primary.dark"
                  textAlign="center"
                  sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
                >
                  {pet.breed} - {pet.species}
                </Typography>

                <Divider sx={{ mb: 2 }} />

                {/* Pet Information */}
                <Stack direction="row" spacing={2} alignItems="center">
                  <Cake color="secondary" />
                  <Typography variant="body1">
                    <strong>Age:</strong> {pet.age} years
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Vaccines color="success" />
                  <Typography variant="body1">
                    <strong>Vaccinated:</strong> {pet.vaccinationstatus}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Palette color="warning" />
                  <Typography variant="body1">
                    <strong>Color:</strong> {pet.color}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <MonitorHeart color="error" />
                  <Typography variant="body1">
                    <strong>Health:</strong> {pet.healthconditions}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Place color="primary" />
                  <Typography variant="body1">
                    <strong>Location:</strong> {pet.location}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Event color="info" />
                  <Typography variant="body1">
                    <strong>Available Since:</strong> {pet.availablesince}
                  </Typography>
                </Stack>

                <Typography variant="body2" paragraph>
                  <strong>Temperament:</strong> {pet.temperament}
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Adoption Requirements:</strong>{" "}
                  {pet.adoptionrequirements}
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Background Story:</strong> {pet.storybackground}
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  href={pet.medicalrecords}
                  target="_blank"
                  sx={{
                    backgroundColor: "#1976D2",
                    "&:hover": { backgroundColor: "#1565C0" },
                  }}
                >
                  View Medical Records
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Adoption Form Section */}
      <Box
        mt={8}

        // sx={{ backgroundColor: "#e0f7fa", borderRadius: "15px" }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          color="secondary.main"
          mb={4}
          textAlign="center"
        >
          Ready to Adopt? Fill out the form below!
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <AdoptionForm animalCode={pet.code} animalType={pet.species} />
      </Box>
    </Box>
  );
};

export default AdoptablePetDetails;
