import React, { useState } from "react";
import { adoptionApplication } from "../../../API/api";
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
  Divider,
} from "@mui/material";

const initialValue = {
  animalCode: "",
  animalType: "",
  adopterName: "",
  contactPhone: "",
  contactEmail: "",
  address: "",
  experience: "",
};

const AdoptionForm = () => {
  const [adoption, setAdoption] = useState(initialValue);
  const [showSuccess, setShowSuccess] = useState(false); // State to control Snackbar visibility

  const {
    animalCode,
    animalType,
    adopterName,
    contactPhone,
    contactEmail,
    address,
    experience,
  } = adoption;

  const handleChange = (e) => {
    setAdoption({ ...adoption, [e.target.name]: e.target.value });
  };

  const handleAnimalType = (e) => {
    setAdoption({ ...adoption, animalType: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await adoptionApplication(adoption);

      setAdoption(initialValue);
      setShowSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Box className="myContainer">
      <Box
        // backgroundColor="primary.back"
        // p={3}
        my={3}
        borderRadius={5}
        width={800}
        mx={"auto"}
        textAlign={"center"}
      >
        <Typography variant="h4" fontWeight={900}>
      ADOPTION APPLICATION FORM
        </Typography>

        <Typography variant="h6" fontWeight={700} py={1}>
          See all the Available Pet for Adoption
        </Typography>

        <Button href="/adoption/adoptable_pets" variant="contained" color="success">
          All Adoptable Pets
        </Button>
      </Box>

      <Divider variant="middle" />

      <Box
        style={{
          // border: "20px solid green",
          borderRadius: "10px",
          padding: 10,
          // margin: "10 150",
        }}
        // sx={}
        mx={{ xs: 5, md: 30 }}
      >
        <Typography
          variant="h6"
          p={1}
          color="green"
          fontWeight={500}
          textAlign={"center"}
        >
          Fill the Adoption Application
        </Typography>

        <Box
          component="form"
          mx={"auto"}
          sx={{
            width: 500,
            maxWidth: "100%",
            px: 4,
          }}
        >
          <TextField
            variant="outlined"
            label="Adopting Animal Code"
            name="animalCode"
            value={animalCode}
            size="small"
            required
            onChange={handleChange}
            fullWidth
            margin="normal"
            color="success"
            focused
          />

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

          <TextField
            variant="outlined"
            label="Adopter Name"
            name="adopterName"
            value={adopterName}
            size="small"
            required
            onChange={handleChange}
            fullWidth
            margin="normal"
            color="success"
            focused
          />

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
          <TextField
            variant="outlined"
            label="Your Address"
            name="address"
            value={address}
            size="small"
            required
            onChange={handleChange}
            fullWidth
            margin="normal"
            color="success"
            focused
          />

          <TextField
            variant="outlined"
            label="Your Experience Details"
            name="experience"
            value={experience}
            size="small"
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            color="success"
            focused
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            color="success"
            sx={{ my: 3, fontWeight: "700" }}
            fullWidth
            onClick={handleSubmit}
          >
            Submit Pet Adoption Application
          </Button>

          {/* Snackbar for showing the success message */}
          <Snackbar
            open={showSuccess}
            autoHideDuration={4000} // Duration in milliseconds
            onClose={() => setShowSuccess(false)} // Function to handle Snackbar close event
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              onClose={() => setShowSuccess(false)} // Function to handle Snackbar close event
              severity="success"
              sx={{ width: "100%" }}
            >
              Your application has been submitted successfully!
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
};

export default AdoptionForm;
