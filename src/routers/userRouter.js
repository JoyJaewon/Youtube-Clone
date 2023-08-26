import express from "express";
import {
  getEdit,
  postEdit,
  logout,
  remove,
  see,
} from "../controllers/userController";
import { protectorMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware, logout);
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
userRouter.get("/delete", remove);
userRouter.get(":id", see);

export default userRouter;
