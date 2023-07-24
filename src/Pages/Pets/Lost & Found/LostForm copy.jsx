import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
  Container,
} from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { addLostPet } from "../../../API/api";

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

// const Container = styled(FormGroup)`
//     width: 50%;
//     margin: 5% 0 0 25%;
//     & > div {
//         margin-top: 20px;
// `;

const LostForm = () => {
  const [lostPet, setLostPet] = useState(initialValue);
  const { name, username, email, phone } = lostPet;

  //   let navigate = useNavigate();

  const onValueChange = (e) => {
    setLostPet({ ...lostPet, [e.target.name]: e.target.value });
  };

  const URL = "http://localhost:5000";

  const addLostPetDetails =  () => {

       axios
        .post(`${URL}/lost_found/lost_form`, lostPet)
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
    <Container>
      <Typography variant="h4" p={5} textAlign={"center"}>
        Add Lost Post
      </Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
        />
      </FormControl>{" "}
      <br />
      <FormControl>
        <InputLabel htmlFor="my-input">Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={username}
          id="my-input"
        />
      </FormControl>{" "}
      <br />
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
          id="my-input"
        />
      </FormControl>{" "}
      <br />
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={phone}
          id="my-input"
        />
      </FormControl>{" "}
      <br />
      <FormControl>
        {" "}
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={addLostPetDetails}
        >
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};

export default LostForm;
