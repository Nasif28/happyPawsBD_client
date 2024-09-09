import React from "react";
import PetCareBanner from "./PetCareBanner";
import PetBoarding from "./PetBoarding";
import PetGrooming from "./PetGrooming";

const PetCare = () => {
  return (
    <div className="myContainer">
      <PetCareBanner />
      <PetGrooming />
      <PetBoarding />
    </div>
  );
};

export default PetCare;
