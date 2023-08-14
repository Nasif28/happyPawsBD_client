import axios from 'axios';

const URL = 'http://localhost:5000';

// export const getLostPets = async (id) => {
//     id = id || '';
//     return await axios.get(`${URL}/lost_found/lost_pets`);
// }

// From Data for Lost Pet
// export const addLostPet = async (lostPet, petPicture) => {
//     console.log(petPicture);
//     return await axios.post(`${URL}/lost_found/lost_form`, lostPet, petPicture);
// }

// All Lost Pets
export const getLostPets = async () => {
    return await axios.get(`${URL}/lost_found/lost_pets`);
}

// From Data for Found Pet
export const addFoundPet = async (foundPet) => {
    return await axios.post(`${URL}/lost_found/found_form`, foundPet);
}

// All Found Pets
export const getFoundPets = async () => {
    return await axios.get(`${URL}/lost_found/found_pets`);
}

// From Data for Adoption Application
export const adoptionApplication = async (adoption) => {
    return await axios.post(`${URL}/adoption/adoption_form`, adoption);
}