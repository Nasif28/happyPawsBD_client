import React from "react";
import AdoptionDetails from "./AdoptionDetails";
import AdoptionBanner from "./AdoptionBanner";
import AdoptionCSS from "./Adoption.css"

const Adoption = () => {
  return (
    <div>
      <AdoptionBanner />
      <AdoptionDetails />
    </div>
  );
};

export default Adoption;
