import React, { useState, useEffect } from 'react'
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material'
import { editUser, getUser } from '../api/api';
import { useNavigate, useParams } from 'react-router-dom'



const initialValue = {
  name: '',
  username: '',
  email: '',
  phone: '',
}

const Container = styled(FormGroup)`
width: 50%;
margin: 5% 0 0 25%;
& > div {
    margin-top: 20px;
  }
`;
const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user

  const navigate = useNavigate();

  useEffect(() => {
    loadUserDetails();
  }, [])


  const { id } = useParams();


  //get single details by id:
  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data)
  }

  //update single data
  const editUserDetails = async () => {
    await editUser(user,id);
    navigate('/all');
  }

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user)
  }

  return (
    < Container>
      <Typography varient="h4">EditUser</Typography>
      <FormControl>
        <InputLabel htmlFor='my-input'>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='name' value={user.name} id="my-input" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='my-input'>User_Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='username' value={user.username} id="my-input" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='my-input'>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='email' value={user.email} id="my-input" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='my-input'>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='phone' value={user.phone} id="my-input" />
      </FormControl>

      <FormControl>
        <Button ariant="contained" color="primary" onClick={() => editUserDetails()} >Edit User</Button>
      </FormControl>

    </Container>
  )
}
export default EditUser