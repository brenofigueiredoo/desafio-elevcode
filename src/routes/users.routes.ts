import { Router } from "express";
import { createUserController } from "../controllers/user.controller";
import verifyUserEmailExistsMiddleware from "../middlewares/users/verifyUserEmailExists.middleware";

const userRoutes: Router = Router();

userRoutes.post("", verifyUserEmailExistsMiddleware, createUserController);

export default userRoutes;
