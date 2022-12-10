import { request, response } from 'express';
import User from '../model/userSchema.js'


// Save data of the user in database
export const addUser = async (request, response) => {
    const user = request.body;
    // console.log(user)
    const newUser = new User(user);
    try {
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

//get all user from database
export const getUsers = async (request, response) => {
    try {
        const users = await User.find({});
        response.status(200).json(users);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}


//get single user by id 
export const getUser = async (request, response) => {
    try {
        // const user = await User.find({_id:request.params.id});
        const user = await User.findById(request.params.id)
        response.status(200).json(user);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

//edit editUser  update item
export const editUser = async (request, response) => {
    let user = request.body;
    console.log(user);
    const editUser = new User(user);
    try {
        await User.updateOne({ _id: request.params.id }, editUser);
        response.status(200).json(editUser);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

//delete user

export const deleteUser = async (request, response) => {
    try {
        await User.deleteOne({_id: request.params.id});
        // response.status(200).json(message:'user deleted message sussessfully');
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}