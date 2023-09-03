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
  Divider,
} from "@mui/material";

const initialValue = {
  animalType: "",
  breed: "",
  colors: "",
  gender: "",
  founderName: "",
  contactPhone: "",
  contactEmail: "",
  foundLocation: "",
  foundDate: "",
  description: "",
  petPicture: "",
};

const FoundForm = () => {
  const [foundPet, setFoundPet] = useState(initialValue);
  // const [petPicture, setPetPicture] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false); // State to control Snackbar visibility

  const {
    animalType,
    breed,
    colors,
    gender,
    founderName,
    contactPhone,
    contactEmail,
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

  const handlePictureChange = async (e) => {
    setFoundPet({
      ...foundPet,
      petPicture: await convertToBase64(e.target.files[0]),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("foundPet", foundPet);

      await addFoundPet(foundPet);

      setFoundPet(initialValue);
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
        <Typography variant="h4" fontWeight={700} mb={2}>
          FOUND PET REGISTRATION
        </Typography>

        <Typography variant="h6" fontWeight={700} py={1}>
          To See All the Lost Pets -
        </Typography>

        <Button href="/lost_found/lost_pets" variant="contained" color="success">
          See All Lost Pets
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
          Fill the Form About The Pet You Found
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

          <TextField
            variant="outlined"
            label="Description of Circumstances"
            name="description"
            value={description}
            size="small"
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            color="success"
            focused
          />

          {/* Picture Upload */}
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            color="success"
            focused
            name="petPicture"
            type="file"
            // accept="image/*"
            accept=".jpeg, .png, .jpg"
            label="Attach Picture of Your Found Pet"
            onChange={handlePictureChange}
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            color="success"
            sx={{ my: 3, fontWeight: "700" }}
            fullWidth
            onClick={handleSubmit}
          >
            Submit Found Pet Application
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
              Your form has been submitted successfully!
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
};

export default FoundForm;

// Convert File to Base64 Format
function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
