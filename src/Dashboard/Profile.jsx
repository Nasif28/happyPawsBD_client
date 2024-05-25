import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { useUserAuth } from "../context/UserAuthContext";

const Profile = () => {
  const { logOut, user } = useUserAuth();

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
        <Avatar
          sx={{ width: 100, height: 100 }}
          alt={user.displayName}
          src={user.photoURL}
        />
        <Typography variant="h5" sx={{ marginTop: 2 }}>
          {user.displayName}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {user.email}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6">User Information:</Typography>
        <Box>
          <Typography variant="body1">Username: {user.displayName}</Typography>
          <Typography variant="body1">Location: {user.location}</Typography>
          {/* Add more user information fields as needed */}
        </Box>
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Edit Profile
        </Button>
      </Paper>
    </Container>
  );
};

export default Profile;
