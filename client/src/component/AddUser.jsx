import React,{useState} from 'react'
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material'
import { addUser } from '../api/api';
import {useNavigate} from 'react-router-dom'

const initialValue ={
  name:'',
  username:'',
  email:'',
  phone:'',
}

const Container = styled(FormGroup)`
width: 50%;
margin: 5% 0 0 25%;
& > div {
    margin-top: 20px;
  }
`;

const AddUser = () => {
  const [user,setUser]=useState(initialValue);
  const {name,username,email,phone} =user

  const navigate =useNavigate();

  const onValueChange =(e) =>{
    setUser({...user, [e.target.name]: e.target.value})
    console.log(user)
  }
  const addUserDetails = async() =>{
    await addUser(user);
    navigate('/all')
  }

  return (
    < Container>
      <Typography varient="h4">AddUser</Typography>
      <FormControl>
        <InputLabel htmlFor='my-input'>Name</InputLabel>
        <Input onChange={(e) =>onValueChange(e)} name='name' value={name} id="my-input" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='my-input'>User_Name</InputLabel>
        <Input  onChange={(e) =>onValueChange(e)} name='username' value={username} id="my-input" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='my-input'>Email</InputLabel>
        <Input onChange={(e) =>onValueChange(e)} name='email' value={email} id="my-input"  />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='my-input'>Phone</InputLabel>
        <Input onChange={(e) =>onValueChange(e)} name='phone' value={phone} id="my-input" />
      </FormControl>

      <FormControl>
        <Button ariant="contained" color="primary" onClick={() => addUserDetails()} >Add User</Button>
      </FormControl>

    </Container>
  )
}
export default AddUser