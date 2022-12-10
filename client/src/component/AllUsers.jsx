import React, { useState, useEffect } from 'react'
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'
import { getusers,deleteUser } from '../api/api'



const StyledTable = styled(Table)`
width:90%;
margin:50px 0 0 50px;
`

const THead = styled(TableRow)`
& > th{
  font-size:15px;
  background:#000000;
  color:#FFFFFF;
}
`

const TRow = styled(TableRow)`
   &td{
    font-size:18px
   }
`

const AllUsers = () => {

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers();
  }, [])

  const getAllUsers = async () => {
    let response = await getusers();
    console.log(response)
    setUsers(response.data);
  }

  const deleteUserDetails =async (id) =>{
    deleteUser(id);
    getAllUsers();
  }

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>ID</TableCell>
          <TableCell>NAME</TableCell>
          <TableCell>USERNAME</TableCell>
          <TableCell>EMAIL</TableCell>
          <TableCell>PHONE</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>

      <TableBody>
        {users.map((user) => (
          <TRow key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name} </TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`} >Edit</Button>
              <Button color="secondary" variant="contained" onClick={() => deleteUserDetails(user._id)} >Delete</Button>
            </TableCell>
          </TRow>
        ))}

      </TableBody>

    </StyledTable>
  )
}

export default AllUsers