import React, { useState, useEffect } from "react";
import vetData from "../../../API/veterinary.json";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DataGrid from "./DataGrid";
import Filters from "./Filters";
import Pagination from "./Pagination";

const FindVet = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [division, setDivision] = useState("");
  const [city, setCity] = useState("");

  const itemsPerPage = 20;

  useEffect(() => {
    setData(vetData);
    setFilteredData(vetData);
  }, []);

  useEffect(() => {
    filterData();
  }, [division, city]);

  const filterData = () => {
    let filtered = vetData;
    if (division) {
      filtered = filtered.filter((item) => item.Division === division);
    }
    if (division === "Dhaka" && city) {
      filtered = filtered.filter((item) => item.City === city);
    }
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handleDivisionChange = (newDivision) => {
    setDivision(newDivision);
    setCity("");
  };

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container className="myContainer">
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          <strong> Find Vet</strong>
        </Typography>
      </Box>
      <Filters
        division={division}
        city={city}
        handleDivisionChange={handleDivisionChange}
        handleCityChange={handleCityChange}
      />
      <DataGrid data={currentItems} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Container>
  );
};
export default FindVet;
