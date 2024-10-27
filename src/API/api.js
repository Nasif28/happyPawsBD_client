import axios from "axios";

// const URL = "https://happypawsbd-server.onrender.com";
const URL = "http://localhost:5000";

// Lost Pet From Data
export const addLostPet = async (lostPetData) => {
  try {
    const response = await axios.post(
      `${URL}/lost_found/lost_form`,
      lostPetData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    return response.data;
  } catch (error) {
    console.error("Error in addFoundPet:", error);
    throw new Error("Failed to submit form");
  }
};

// All Lost Pets
export const getLostPets = async () => {
  return await axios.get(`${URL}/lost_found/lost_pets`);
};

// Found Pet From Data
export const addFoundPet = async (foundPetData) => {
  try {
    const response = await axios.post(
      `${URL}/lost_found/found_form`,
      foundPetData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    return response.data;
  } catch (error) {
    console.error("Error in addFoundPet:", error);
    throw new Error("Failed to submit form");
  }
};

// All Found Pets
export const getFoundPets = async () => {
  return await axios.get(`${URL}/lost_found/found_pets`);
};

// Adoption Application From Data
export const adoptionApplication = async (adoption, code) => {
  return await axios.post(`${URL}/adoption/adoptable_pets/${code}`, adoption);
};

// Training Application From Data
export const trainingApplication = async (training, id) => {
  return await axios.post(`${URL}/training/${id}`, training);
};

// Grooming Application From Data
export const groomingApplication = async (grooming, id) => {
  return await axios.post(`${URL}/petcare/grooming/${id}`, grooming);
};

// Boarding Application From Data
export const boardingApplication = async (boarding, id) => {
  return await axios.post(`${URL}/petcare/boarding/${id}`, boarding);
};
