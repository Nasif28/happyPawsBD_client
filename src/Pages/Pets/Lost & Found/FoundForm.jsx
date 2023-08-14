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
} from "@mui/material";

const initialValue = {
  animalType: "",
  breed: "",
  colors: "",
  distinctiveFeatures: "",
  gender: "",
  founderName: "",
  contactPhone: "",
  contactEmail: "",
  foundLocation: "",
  foundDate: "",
  description: "",
};

const FoundForm = () => {
  const [foundPet, setFoundPet] = useState(initialValue);
  // const [petPicture, setPetPicture] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false); // State to control Snackbar visibility

  const {
    animalType,
    breed,
    colors,
    distinctiveFeatures,
    gender,
    founderName,
    contactPhone,
    contactEmail,
    foundLocation,
    foundDate,
    description,
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

  // const handlePictureChange = (e) => {
  //   setPetPicture(e.target.files[0]);
  // };

  const handleSubmit = async () => {
    try {
      // const formData = new FormData();
      // formData.append("lostPet", JSON.stringify(lostPet));
      // formData.append("petPicture", petPicture);

      await addFoundPet(foundPet);

      // Clear the form after successful submission
      setFoundPet({
        animalType: "",
        breed: "",
        colors: "",
        distinctiveFeatures: "",
        gender: "",
        founderName: "",
        contactPhone: "",
        contactEmail: "",
        foundLocation: "",
        foundDate: "",
        description: "",
      });
      //   // setPetPicture(null);

      // Set showSuccess to true to show the Snackbar
      setShowSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Box className="myContainer">
      <Box
        backgroundColor="primary.back"
        p={3}
        my={3}
        borderRadius={5}
        width={800}
        mx={"auto"}
        textAlign={"center"}
      >
        <Typography variant="h4" fontWeight={700} mb={2}>
          Regester The Found Pet
        </Typography>

        <Typography variant="h6" fontWeight={700} py={1}>
          To See All the Lost Pets -
        </Typography>

        <Button variant="contained" color="success">
          See All Lost Pets
        </Button>
      </Box>

      <Box
        style={{
          border: "20px solid green",
          borderRadius: "10px",
          padding: 6,
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
          Fill the Form
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
          <TextField
            variant="outlined"
            label="Distinctive Features"
            name="distinctiveFeatures"
            value={distinctiveFeatures}
            size="small"
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
            label="Owner Name"
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
            label="Last Seen Area"
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
            label="Date of Lost"
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
          {/* <input
        style={{
          border: "2px solid green",
          borderRadius: "5px",
          padding: 6,
          marginTop: 5,
          cursor: "pointer",
        }}
        type="file"
        accept="image/*"
        onChange={handlePictureChange}
      /> */}

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
