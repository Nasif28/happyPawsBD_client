import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const URL = "";
  const handleAddUser = () => {
    axios.post('http://localhost:5000/lost_found/lost_form', formData)
      .then((res) => {
        console.log(res.data);
        // You can add additional logic here, like showing a success message or clearing the form fields.
      })
      .catch((error) => {
        console.error('Error adding user:', error);
        // You can handle errors here, like showing an error message to the user.
      });
  };

  return (
    <div>
      <h1>Add User</h1>
      <label>First Name:</label>
      <input type="text" name="firstName" onChange={handleChange} />

      <label>Last Name:</label>
      <input type="text" name="lastName" onChange={handleChange} />

      <label>Phone:</label>
      <input type="text" name="phone" onChange={handleChange} />

      <label>Email:</label>
      <input type="email" name="email" onChange={handleChange} />

      <button type="button" onClick={handleAddUser}>
        Add User
      </button>
    </div>
  );
};

export default App;
