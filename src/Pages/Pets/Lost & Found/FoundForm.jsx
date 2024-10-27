import React, { useState } from "react";
import { addFoundPet } from "../../../API/api";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Snackbar,
  Alert,
  Typography,
  Grid,
} from "@mui/material";

const initialValue = {
  animalType: "",
  breed: "",
  colors: "",
  gender: "",
  founderName: "",
  contactPhone: "",
  foundLocation: "",
  foundDate: "",
  description: "",
  petPicture: "",
};

const FoundForm = () => {
  const [foundPet, setFoundPet] = useState(initialValue);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    animalType,
    breed,
    colors,
    gender,
    founderName,
    contactPhone,
    foundLocation,
    foundDate,
    description,
    petPicture,
  } = foundPet;

  const handleChange = (e) => {
    setFoundPet({ ...foundPet, [e.target.name]: e.target.value });
  };

  const handleAnimalType = (e) => {
    setFoundPet({ ...foundPet, animalType: e.target.value });
  };

  const handleAnimalGender = (e) => {
    setFoundPet({ ...foundPet, gender: e.target.value });
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    setFoundPet({ ...foundPet, petPicture: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Manually append each field to FormData
    // formData.append("animalType", foundPet.animalType);
    // formData.append("breed", foundPet.breed);
    // formData.append("colors", foundPet.colors);
    // formData.append("gender", foundPet.gender);
    // formData.append("founderName", foundPet.founderName);
    // formData.append("contactPhone", foundPet.contactPhone);
    // formData.append("contactEmail", foundPet.contactEmail);
    // formData.append("foundLocation", foundPet.foundLocation);
    // formData.append("foundDate", foundPet.foundDate);
    // formData.append("description", foundPet.description);
    // formData.append("petPicture", foundPet.petPicture);

    Object.entries(foundPet).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      await addFoundPet(formData);
      setFoundPet(initialValue);
      setShowSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Box>
      <Box mx={"auto"} textAlign={"center"}>
        <Typography variant="h5" fontWeight={700}>
          FOUND PET REGISTRATION
        </Typography>
      </Box>

      <Box>
        <Box
          component="form"
          mx={"auto"}
          sx={{
            p: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl
                variant="outlined"
                name="animalType"
                size="small"
                required
                fullWidth
                margin="normal"
                color="success"
                focused
              >
                <InputLabel id="animalType">Type of Animal</InputLabel>
                <Select
                  labelId="animalType"
                  id="animalType"
                  value={animalType}
                  label="animalType"
                  onChange={handleAnimalType}
                >
                  <MenuItem value="Cat">Cat</MenuItem>
                  <MenuItem value="Dog">Dog</MenuItem>
                  <MenuItem value="Bird">Bird</MenuItem>
                  <MenuItem value="Rabbits">Rabbits</MenuItem>
                  <MenuItem value="GuineaPig">Guinea Pig</MenuItem>
                  <MenuItem value="Horse">Horse</MenuItem>
                  <MenuItem value="Turtle">Turtle</MenuItem>
                  <MenuItem value="Hamsters">Hamsters</MenuItem>
                  <MenuItem value="Hedgehogs">Hedgehogs</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Breed Type"
                name="breed"
                value={breed}
                size="small"
                onChange={handleChange}
                fullWidth
                margin="normal"
                color="success"
                focused
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Pet's Colors"
                name="colors"
                value={colors}
                size="small"
                required
                onChange={handleChange}
                fullWidth
                margin="normal"
                color="success"
                focused
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl
                variant="outlined"
                name="gender"
                size="small"
                required
                fullWidth
                margin="normal"
                color="success"
                focused
              >
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                  labelId="gender"
                  id="gender"
                  value={gender}
                  label="Gender"
                  onChange={handleAnimalGender}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Not Sure">Not Sure</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Your Name"
                name="founderName"
                value={founderName}
                size="small"
                required
                onChange={handleChange}
                fullWidth
                margin="normal"
                color="success"
                focused
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Contact Number"
                name="contactPhone"
                value={contactPhone}
                size="small"
                required
                onChange={handleChange}
                fullWidth
                margin="normal"
                color="success"
                focused
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Found Location"
                name="foundLocation"
                value={foundLocation}
                size="small"
                required
                onChange={handleChange}
                fullWidth
                margin="normal"
                color="success"
                focused
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Date of Found"
                name="foundDate"
                value={foundDate}
                size="small"
                required
                onChange={handleChange}
                fullWidth
                margin="normal"
                color="success"
                focused
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Description of Circumstances"
                name="description"
                value={description}
                size="small"
                onChange={handleChange}
                fullWidth
                multiline
                rows={2}
                margin="normal"
                color="success"
                focused
              />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Button
                  variant="contained"
                  component="label"
                  color="success"
                  sx={{ textTransform: "none", fontWeight: 600 }}
                >
                  Upload Picture
                  <input
                    type="file"
                    hidden
                    accept=".jpeg, .png, .jpg"
                    onChange={handlePictureChange}
                  />
                </Button>

                {petPicture && (
                  <Typography variant="body2" color="textSecondary">
                    Picture attached
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            color="success"
            sx={{ my: 3, fontWeight: "700" }}
            fullWidth
            onClick={handleSubmit}
          >
            Submit Found Pet Application
          </Button>

          <Snackbar
            open={showSuccess}
            autoHideDuration={4000}
            onClose={() => setShowSuccess(false)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              onClose={() => setShowSuccess(false)}
              severity="success"
              sx={{ width: "100%" }}
            >
              Your form has been submitted successfully!
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
};

export default FoundForm;
