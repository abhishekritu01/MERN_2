import express from "express";
import { addUser,getUsers ,getUser,editUser,deleteUser} from "../controller/userControllers.js";

const router =express.Router();

//router
router.post('/add',addUser);
router.get('/all',getUsers);
router.get('/:id',getUser);
router.put('/:id',editUser);
router.delete('/:id',deleteUser);

export default router;