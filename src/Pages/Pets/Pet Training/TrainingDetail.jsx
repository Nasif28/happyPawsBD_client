import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from "@mui/material";
import { useUserAuth } from "../../../context/UserAuthContext";
import Training from "./../../../API/training.json";
import { trainingApplication } from "../../../API/api";

const TrainingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useUserAuth();
  const [item, setItem] = useState(null);
  const [training, setTraining] = useState({
    name: "",
    contactEmail: "",
    contactPhone: "",
    address: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Find the selected program
    const selectedProgram = Training.find((p) => p.id === parseInt(id));
    setItem(selectedProgram);

    // Auto-fill name and email from the logged-in user
    if (user) {
      setTraining((prevTraining) => ({
        ...prevTraining,
        name: user.displayName || "",
        contactEmail: user.email || "",
      }));
    }
  }, [id, user]);

  const handleChange = (e) => {
    setTraining({ ...training, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedTraining = {
        ...training,
        programId: item.id,
      };

      await trainingApplication(updatedTraining, item.id);

      // Reset the form but keep name and email from user
      setTraining({
        name: user.displayName || "",
        contactEmail: user.email || "",
        contactPhone: "",
        address: "",
      });
      setShowSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
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
        Program Details
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <img
              src={item.picture}
              alt={item.title}
              style={{ width: "100%" }}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom color="green">
                {item.title}
              </Typography>
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
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom color="primary.main">
                Enroll in this Program
              </Typography>

              <Box component="form" mt={2} onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Full Name"
                  margin="normal"
                  required
                  name="name"
                  value={training.name}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  margin="normal"
                  required
                  name="contactEmail"
                  value={training.contactEmail}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  type="tel"
                  margin="normal"
                  required
                  name="contactPhone"
                  value={training.contactPhone}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Address"
                  margin="normal"
                  required
                  name="address"
                  value={training.address}
                  onChange={handleChange}
                />

                <Button
                  variant="contained"
                  color="success"
                  sx={{ mt: 3, fontWeight: "700" }}
                  type="submit"
                >
                  Accept Training Program
                </Button>

                {/* Snackbar for showing the success message */}
                <Snackbar
                  open={showSuccess}
                  autoHideDuration={4000}
                  onClose={() => setShowSuccess(false)}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                >
                  <Alert
                    onClose={() => setShowSuccess(false)}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Your training enrollment has been successfully submitted!
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

export default TrainingDetail;
