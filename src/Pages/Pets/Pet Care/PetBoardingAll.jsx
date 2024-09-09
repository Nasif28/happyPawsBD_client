import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  CardActionArea,
} from "@mui/material";
import PetBoardingAPI from "./../../../API/petBoarding.json";
import { useNavigate } from "react-router-dom";

const PetBoardingAll = () => {
  const navigate = useNavigate();

  const handleboarding = (id) => {
    navigate(`/petcare/boarding/${id}`);
  };

  return (
    <Box className="myContainer" py={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" gutterBottom fontWeight={900} pt={2}>
          Boarding
        </Typography>
      </Box>

      <Grid container spacing={4} pt={3}>
        {/* Main Article */}
        {PetBoardingAPI.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              sx={{
                borderRadius: "2",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
              }}
            >
              <CardActionArea onClick={() => handleboarding(item.id)}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.picture}
                  alt="Main Article"
                />
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="primary.para">
                    {item.shortDescription}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PetBoardingAll;
