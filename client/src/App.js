import React from 'react'
import Home from './component/Home'
import NavBar from './component/NavBar'
import AllUser from './component/AllUsers'
import EditUser from './component/EditUser'
import AddUser from './component/AddUser'
import NotFound from './component/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/all' element={<AllUser />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App