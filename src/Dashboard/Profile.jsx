import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
  Grid,
  Chip,
} from "@mui/material";
import { useUserAuth } from "../context/UserAuthContext";

const Profile = () => {
  const { logOut, user } = useUserAuth();
  console.log(user);

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Grid container spacing={3}>
          {/* Avatar and Basic Info Section */}
          <Grid item xs={12} md={4}>
            <Avatar
              sx={{ width: 150, height: 150 }}
              alt={user.displayName}
              src={user.photoURL}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              {user.displayName}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {user.email}
            </Typography>
            <Chip
              label={
                user.emailVerified ? "Email Verified" : "Email Not Verified"
              }
              color={user.emailVerified ? "success" : "warning"}
              sx={{ mt: 1 }}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* User Information Section */}
        <Typography variant="h6" gutterBottom>
          User Information
        </Typography>
        <Box>
          <Typography variant="body1">
            <strong>Username:</strong> {user.displayName || "N/A"}
          </Typography>
          <Typography variant="body1">
            <strong>Location:</strong> {user.location || "N/A"}
          </Typography>
          <Typography variant="body1">
            <strong>Phone Number:</strong> {user.phoneNumber || "Not provided"}
          </Typography>
          <Typography variant="body1">
            <strong>User ID (UID):</strong> {user.uid}
          </Typography>
          <Typography variant="body1">
            <strong>Provider:</strong> {user.providerData[0]?.providerId}
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Actions Section */}
        <Box
        // sx={{ textAlign: "center" }}
        >
          {/* <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
            Edit Profile
          </Button> */}
          <Button variant="contained" color="error" onClick={logOut}>
            Log Out
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Profile;
