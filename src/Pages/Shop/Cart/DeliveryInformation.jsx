import React, { useState } from "react";
import { Box, Grid, TextField, Switch, Typography } from "@mui/material";
import {
  // LocalizationProvider,
  // DatePicker,
} from "@mui/x-date-pickers/AdapterDateFns";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const DeliveryInformation = () => {
  const [scheduleDelivery, setScheduleDelivery] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState(new Date());

  return (
    <Box
      sx={{
        padding: 2,
        border: "1px solid #ddd",
        borderRadius: 1,
        marginBottom: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Delivery Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            defaultValue="Bryan Cranston"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Mobile Number"
            variant="outlined"
            defaultValue="+1 424-236-3574"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            defaultValue="thejon@example.com"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="City"
            variant="outlined"
            defaultValue="Hawthorne"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="State"
            variant="outlined"
            defaultValue="California"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="ZIP"
            variant="outlined"
            defaultValue="90250"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            variant="outlined"
            defaultValue="4796 Libby Street"
          />
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Schedule Delivery
        </Typography>
        <Switch
          checked={scheduleDelivery}
          onChange={() => setScheduleDelivery(!scheduleDelivery)}
        />
        {scheduleDelivery && (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Select Date"
              value={deliveryDate}
              onChange={(newValue) => setDeliveryDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        )}
      </Box>
    </Box>
  );
};

export default DeliveryInformation;
