import { Router } from "express";
import { userLoginController } from "../controllers/login.controller";

const loginRoute: Router = Router();

loginRoute.post("", userLoginController);

export default loginRoute;
