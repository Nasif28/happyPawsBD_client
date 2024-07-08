import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Tooltip,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";

const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    onViewDetails(product);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog>
        <DialogContent>
         
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
