import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  TextField,
  Avatar,
  Grid,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from "@mui/material";
import { useUserAuth } from "../../../context/UserAuthContext";
import Training from "./../../../API/training.json";

const PetBoardingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useUserAuth();
  const [item, setItem] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const selectedProgram = Training.find((p) => p.id === parseInt(id));
    setItem(selectedProgram);
  }, [id]);

  const handleSubmit = () => {
    if (user) {
      setShowSuccess(true);
    } else {
      navigate(`/login?redirect=/petcare/boarding/${id}`);
    }
  };

  if (!item) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <Box className="myContainer">
      <Typography
        variant="h4"
        fontWeight={700}
        my={5}
        gutterBottom
        textAlign="center"
        color="primary"
      >
        {item.title}
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: "0",
              boxShadow: "none",
            }}
          >
            <img
              src={item.picture}
              alt={item.title}
              style={{ width: "100%" }}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom color="green"></Typography>
              <Typography variant="body1" color="primary.para" pl={4} mb={2}>
                <ul>
                  <li>{item.dis1}</li>

                  <li>{item.dis2}</li>

                  <li>{item.dis3}</li>
                </ul>
              </Typography>

              <Typography variant="body1" paragraph>
                <strong>Duration:</strong> 8 weeks
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Price:</strong> $300
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Program Covers:</strong> Basic commands, socialization,
                leash training, etc.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Enroll Form */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              boxShadow: "none",
            }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom color="primary.main">
                Enroll in this Program
              </Typography>

              <Box component="form" mt={2}>
                <TextField
                  fullWidth
                  label="Full Name"
                  margin="normal"
                  required
                  defaultValue={user ? user.displayName : ""}
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  margin="normal"
                  required
                  defaultValue={user ? user.email : ""}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  type="tel"
                  margin="normal"
                  required
                />
                <TextField fullWidth label="Address" margin="normal" required />
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mt: 3, fontWeight: "700" }}
                  // fullWidth
                  onClick={handleSubmit}
                >
                  Accept Training Program
                </Button>
                {/* Snackbar for showing the success message */}
                <Snackbar
                  open={showSuccess}
                  autoHideDuration={4000} // Duration in milliseconds
                  onClose={() => setShowSuccess(false)} // Function to handle Snackbar close event
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PetBoardingDetails;
