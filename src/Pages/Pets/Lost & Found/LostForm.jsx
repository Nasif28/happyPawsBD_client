import React, { useState } from "react";
import { addLostPet } from "../../../API/api";

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
  CircularProgress,
} from "@mui/material";

const initialValue = {
  petName: "",
  animalType: "",
  colors: "",
  ownerName: "",
  contactPhone: "",
  contactEmail: "",
  lastSeenLocation: "",
  lostDate: "",
  description: "",
  petPicture: "",
};

const LostForm = () => {
  const [lostPet, setLostPet] = useState(initialValue);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    petName,
    animalType,
    colors,
    ownerName,
    contactPhone,
    contactEmail,
    lastSeenLocation,
    lostDate,
    description,
    petPicture,
  } = lostPet;

  const handleChange = (e) => {
    setLostPet({ ...lostPet, [e.target.name]: e.target.value });
  };

  const handleAnimalType = (e) => {
    setLostPet({ ...lostPet, animalType: e.target.value });
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    setLostPet({ ...lostPet, petPicture: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    Object.entries(lostPet).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      await addLostPet(formData);
      setLostPet(initialValue);
      setShowSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Box mx={"auto"} textAlign={"center"}>
        <Typography variant="h5" fontWeight={700}>
          LOST PET REGISTRATION
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
              <TextField
                variant="outlined"
                label="Pet's Name"
                name="petName"
                value={petName}
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
              <TextField
                variant="outlined"
                label="Owner Name"
                name="ownerName"
                value={ownerName}
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
                label="Email"
                name="contactEmail"
                value={contactEmail}
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
                label="Last Seen Area"
                name="lastSeenLocation"
                value={lastSeenLocation}
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
                label="Date of Lost"
                name="lostDate"
                value={lostDate}
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

            {/* Picture Upload */}
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

          {/* Submit Button */}
          <Button
            variant="contained"
            color="success"
            sx={{ my: 3, fontWeight: "700" }}
            fullWidth
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Submit Lost Pet Application"
            )}
          </Button>

          {/* Snackbar for showing the success message */}
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

export default LostForm;
