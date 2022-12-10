import axios from 'axios'


const URL = 'http://localhost:5000'


//add user 
export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data)
    } catch (error) {
        console.log('Error while calling Api', error);
    }
}


//get all data from backend
export const getusers = async () => {
    try {
        return await axios.get(`${URL}/all`)
    } catch (error) {
        console.log('Error while calling Api', error);
    }
}



//get single data from mongodb database  by id
export const getUser = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log('Error while calling Api', error);
    }
}



//update single item
export const editUser = async (user,id) => {
    try {
        return await axios.put(`${URL}/${id}`, user)
    } catch (error) {
        console.log('Error while calling Api', error);
    }
}


//delete user
export const deleteUser = async(id) =>{
    try {
        return await axios.delete(`${URL}/${id}`)
    } catch (error) {
        console.log('Error while calling Api', error);
    }
}