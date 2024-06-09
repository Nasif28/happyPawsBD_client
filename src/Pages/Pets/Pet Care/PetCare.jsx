import React from "react";
import PetCareBanner from "./PetCareBanner";
import DayCare from "./DayCare";
import PetBoarding from "./PetBoarding";
import PetGrooming from "./PetGrooming";

const PetCare = () => {
  return (
    <div className="myContainer">
      <PetCareBanner />
      <DayCare />
      <PetBoarding />
      <PetGrooming />
    </div>
  );
};

export default PetCare;
