import React, { useState } from "react";
import { Dialog, DialogContent, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const TrainingSubmit = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <Button onClick={handleOpen}>Open Form</Button>
      <Dialog open={open} onClose={handleClose}>
        <IconButton
          sx={{ position: "absolute", top: 5, right: 5 }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          {/* Your form content goes here */}
          {/* Example form fields */}
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </DialogContent>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            style={{ marginLeft: 10 }}
          >
            Submit
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default TrainingSubmit;
