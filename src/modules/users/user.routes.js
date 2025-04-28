
import { Router } from "express";
import { handleLogin, handleRegister, login, logout, register, sarahahIndex, user } from "./user.controller.js";




const userRouter = Router();

userRouter.get("/index", sarahahIndex);

userRouter.get("/user/:id", user);

userRouter.get("/user", user);

userRouter.get("/register", register);

userRouter.get("/login", login);

userRouter.get("/logout", logout);

userRouter.post("/handleRegister", handleRegister);

userRouter.post("/handleLogin", handleLogin);








export default userRouter;