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
  const [showSuccess, setShowSuccess] = useState(false);

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
        sx={{
          background: "linear-gradient(135deg, #f0f4f8, #d9e4f5)",
          p: 4,
          my: 4,
          borderRadius: "12px",
          maxWidth: 600,
          mx: "auto",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={900}
          color="#34495e"
          pb={2}
          gutterBottom
        >
          Adoption Application Form
        </Typography>

        <Box component="form">
          <TextField
            variant="outlined"
            label="Animal Code"
            name="animalCode"
            value={animalCode}
            size="medium"
            required
            onChange={handleChange}
            fullWidth
            margin="normal"
            color="success"
            focused
            sx={{
              borderRadius: "8px",
              background: "#f8f9fa",
            }}
          />

          <FormControl
            variant="outlined"
            name="animalType"
            size="medium"
            required
            fullWidth
            margin="normal"
            color="success"
            focused
            sx={{
              background: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <InputLabel id="animalType">Type of Animal</InputLabel>
            <Select
              labelId="animalType"
              id="animalType"
              value={animalType}
              label="Type of Animal"
              onChange={handleAnimalType}
            >
              <MenuItem value="Cat">Cat</MenuItem>
              <MenuItem value="Dog">Dog</MenuItem>
              <MenuItem value="Bird">Bird</MenuItem>
              <MenuItem value="Rabbit">Rabbit</MenuItem>
              <MenuItem value="GuineaPig">Guinea Pig</MenuItem>
              <MenuItem value="Horse">Horse</MenuItem>
              <MenuItem value="Turtle">Turtle</MenuItem>
              <MenuItem value="Hamster">Hamster</MenuItem>
              <MenuItem value="Hedgehog">Hedgehog</MenuItem>
            </Select>
          </FormControl>

          <TextField
            variant="outlined"
            label="Your Name"
            name="adopterName"
            value={adopterName}
            size="medium"
            required
            onChange={handleChange}
            fullWidth
            margin="normal"
            color="success"
            focused
            sx={{
              borderRadius: "8px",
              background: "#f8f9fa",
            }}
          />

          <TextField
            variant="outlined"
            label="Contact Number"
            name="contactPhone"
            value={contactPhone}
            size="medium"
            required
            onChange={handleChange}
            fullWidth
            margin="normal"
            color="success"
            focused
            sx={{
              borderRadius: "8px",
              background: "#f8f9fa",
            }}
          />

          <TextField
            variant="outlined"
            label="Email"
            name="contactEmail"
            value={contactEmail}
            size="medium"
            onChange={handleChange}
            fullWidth
            margin="normal"
            color="success"
            focused
            sx={{
              borderRadius: "8px",
              background: "#f8f9fa",
            }}
          />

          <TextField
            variant="outlined"
            label="Your Address"
            name="address"
            value={address}
            size="medium"
            required
            onChange={handleChange}
            fullWidth
            margin="normal"
            color="success"
            focused
            sx={{
              borderRadius: "8px",
              background: "#f8f9fa",
            }}
          />

          <TextField
            variant="outlined"
            label="Experience with Pets"
            name="experience"
            value={experience}
            size="medium"
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            color="success"
            focused
            sx={{
              borderRadius: "8px",
              background: "#f8f9fa",
            }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              background: "linear-gradient(90deg, #e67e22, #d35400)",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "8px",
              my: 3,
              "&:hover": {
                background: "linear-gradient(90deg, #d35400, #e67e22)",
              },
            }}
            onClick={handleSubmit}
          >
            Submit Adoption Application
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
              Your application has been submitted successfully!
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
};

export default AdoptionForm;
