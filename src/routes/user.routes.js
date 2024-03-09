// 1. Import express.
import express from 'express';
import UserController from '../controllers/user.controller.js';


// 2. Initialize Express router.
const userRouter = express.Router();

const usersController = new UserController;

//Login
userRouter.get("/login", usersController.getLogin);
userRouter.post("/login", usersController.postLogin);

//Register
userRouter.get("/register", usersController.getRegister);
userRouter.post("/register", usersController.postRegister);

export default userRouter;
