import React from "react";
import AdoptionDetails from "./AdoptionDetails";
import AdoptionBanner from "./AdoptionBanner";
import AdoptablePets from "./AdoptablePets";

const Adoption = () => {
  return (
    <div>
      <AdoptionBanner />
      <AdoptionDetails />
      <AdoptablePets />
    </div>
  );
};

export default Adoption;
