import axios from 'axios';

const URL = 'http://localhost:5000';

// export const getLostPets = async (id) => {
//     id = id || '';
//     return await axios.get(`${URL}/lost_found/lost_pets`);
// }

export const addLostPet = async (lostPet) => {
    return await axios.post(`${URL}/lost_found/lost_form`, lostPet);

}

// export const deleteUser = async (id) => {
//     return await axios.delete(`${URL}/${id}`);
// }

// export const editUser = async (id, user) => {
//     return await axios.put(`${URL}/${id}`, user)
// }