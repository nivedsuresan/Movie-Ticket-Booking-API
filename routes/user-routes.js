import express from "express";
import { deleteUser, getAllUsers, getBookingsOfUser, login, signup, updateUser } from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login",login);
userRouter.get("/",getAllUsers);
userRouter.get("/bookings/:id",getBookingsOfUser);
userRouter.put("/:id",updateUser);
userRouter.delete("/:id",deleteUser);

export default userRouter;