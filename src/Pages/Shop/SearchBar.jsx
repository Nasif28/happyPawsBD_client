import React from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <IconButton>
      <SearchIcon />
    </IconButton>
  </Box>
);

export default SearchBar;
