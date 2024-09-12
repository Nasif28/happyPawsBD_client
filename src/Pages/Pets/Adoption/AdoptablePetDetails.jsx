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
  Wc,
  Scale,
  Pets,
  ChildCare,
  Money,
  AttachMoney,
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
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 16,
                left: 16,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "#fff",
                padding: "5px 10px",
                borderRadius: "8px",
                zIndex: 1,
              }}
            >
              <Typography variant="h6" fontWeight={700}>
                {pet.code}
              </Typography>
            </Box>

            <CardMedia
              component="img"
              image={pet.photos}
              alt={pet.name}
              sx={{
                borderRadius: "15px 15px 0 0",
                objectFit: "cover",
              }}
            />
          </Card>

          <Typography variant="body2" mt={2} mb={1} paragraph>
            <strong>Breed:</strong> {pet.breeddescription}
          </Typography>
          <Typography variant="body2" mb={1} paragraph>
            <strong>Temperament:</strong> {pet.temperament}
          </Typography>
          <Typography variant="body2" mb={1} paragraph>
            <strong>Adoption Requirements:</strong> {pet.adoptionrequirements}
          </Typography>
          <Typography variant="body2" mb={1} paragraph>
            <strong>Background Story:</strong> {pet.storybackground}
          </Typography>
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
                <Box textAlign="center">
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    color="primary.dark"
                    sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
                  >
                    {pet.breed}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    // textAlign="right"
                    sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
                  >
                    {pet.origin}
                  </Typography>
                </Box>

                <Divider sx={{ mb: 2 }} />

                {/* Pet Information */}
                <Stack direction="row" spacing={2} alignItems="center">
                  <Cake color="secondary" />
                  <Typography variant="body1">
                    <strong>Age:</strong> {pet.age} years
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Wc color="info" />
                  <Typography variant="body1">
                    <strong>Gender:</strong> {pet.gender}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Scale color="secondary" />
                  <Typography variant="body1">
                    <strong>Weight:</strong> {pet.weight}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Vaccines color="success" />
                  <Typography variant="body1">
                    <strong>Vaccine:</strong> {pet.vaccinationstatus}
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
                    <strong>Health Issue:</strong> {pet.healthconditions}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <AttachMoney color="success" />
                  <Typography variant="body1">
                    <strong>Adoption Fee:</strong> {pet.adoptionfee} BDT
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Pets color="primary" />
                  <Typography variant="body1">
                    <strong>Good with Other Pets:</strong>{" "}
                    {pet.goodwithotherpets}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <ChildCare color="warning" />
                  <Typography variant="body1">
                    <strong>Good with Children:</strong> {pet.goodwithchildren}
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

                <Button
                  variant="contained"
                  color="success"
                  href={pet.medicalrecords}
                  target="_blank"
                  // sx={{
                  //   backgroundColor: "#1976D2",
                  //   "&:hover": { backgroundColor: "#1565C0" },
                  // }}
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
          color="green"
          mb={2}
          textAlign="center"
        >
          Ready to Adopt? Fill out the form below!
        </Typography>
        <Divider />
        <AdoptionForm animalCode={pet.code} animalType={pet.species} />
      </Box>
    </Box>
  );
};

export default AdoptablePetDetails;
