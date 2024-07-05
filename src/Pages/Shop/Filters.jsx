import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Slider,
  Typography,
  Button,
} from "@mui/material";

const Filters = ({ categories, productTypes, priceRange, setFilters }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedProductTypes, setSelectedProductTypes] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRange);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleProductTypeChange = (type) => {
    setSelectedProductTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handlePriceRangeChange = (event, newValue) => {
    setSelectedPriceRange(newValue);
  };

  const applyFilters = () => {
    setFilters({
      categories: selectedCategories,
      productTypes: selectedProductTypes,
      priceRange: selectedPriceRange,
    });
  };

  return (
    <Box>
      <Typography variant="h6">Filters</Typography>
      <FormControl component="fieldset">
        <Typography variant="subtitle1">Categories</Typography>
        <FormGroup>
          {categories.map((category) => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
              }
              label={category}
            />
          ))}
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset">
        <Typography variant="subtitle1">Product Types</Typography>
        <FormGroup>
          {productTypes.map((type) => (
            <FormControlLabel
              key={type}
              control={
                <Checkbox
                  checked={selectedProductTypes.includes(type)}
                  onChange={() => handleProductTypeChange(type)}
                />
              }
              label={type}
            />
          ))}
        </FormGroup>
      </FormControl>
      <Typography variant="subtitle1">Price Range</Typography>
      <Slider
        value={selectedPriceRange}
        onChange={handlePriceRangeChange}
        valueLabelDisplay="auto"
        min={0}
        max={100}
      />
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" onClick={applyFilters}>
          Apply Filters
        </Button>
      </Box>
    </Box>
  );
};

export default Filters;
