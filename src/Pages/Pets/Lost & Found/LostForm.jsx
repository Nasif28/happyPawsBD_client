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
  Divider,
} from "@mui/material";

const initialValue = {
  petName: "",
  animalType: "",
  age: "",
  colors: "",
  gender: "",
  ownerName: "",
  contactPhone: "",
  contactEmail: "",
  lastSeenLocation: "",
  lostDate: "",
  description: "",
  petPicture: "",
};

const LostFormcopy = () => {
  const [lostPet, setLostPet] = useState(initialValue);
  // const [petPicture, setPetPicture] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    petName,
    animalType,
    age,
    colors,
    gender,
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

  const handleAnimalGender = (e) => {
    setLostPet({ ...lostPet, gender: e.target.value });
  };

  const handlePictureChange = async (e) => {
    setLostPet({
      ...lostPet,
      petPicture: await convertToBase64(e.target.files[0]),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("lostPet", lostPet);

      await addLostPet(lostPet);

      setLostPet(initialValue);
      setShowSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Box className="myContainer">
      <Box
        // backgroundColor="primary.back"

        my={3}
        borderRadius={5}
        // width={800}
        mx={"auto"}
        textAlign={"center"}
      >
        <Typography variant="h4" fontWeight={700} my={2}>
          LOST PET REGISTRATION
        </Typography>

        <Typography variant="h6" fontWeight={700} py={1}>
          To See All the Found Pets -
        </Typography>

        <Button href="/lost_found/found_pets" variant="contained" color="success">
          See All Found Pets
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
          Fill the Form About Your Lost Pet
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
            label="Age"
            name="age"
            value={age}
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

          <TextField
            variant="outlined"
            label="Description of Circumstances"
            name="description"
            value={description}
            size="small"
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
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
            label="Attach Picture of Your Pet"
            onChange={handlePictureChange}
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
            name="petPicture"
            type="file"
            // accept="image/*"
            accept=".jpeg, .png, .jpg"
            label="Attach Picture of Your Pet"
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
            Submit Lost Pet Application
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

export default LostFormcopy;

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
