import { Router } from "express";
import { UsersController } from "../controllers/UserController.js";
import loginRequired from "../middlewars/loginRequired.js";
import adminRequired from "../middlewars/adminRequired.js";
const userRoutes = Router();
const usersController = new UsersController();

//POST
userRoutes.post("/", usersController.createUser);

//GET
userRoutes.get("/", loginRequired, adminRequired, usersController.findAllUsers);
userRoutes.get("/:id", loginRequired, adminRequired, usersController.findUser);

//UPDATE
userRoutes.put("/:id", loginRequired, usersController.updateUser);

//DELETE
userRoutes.delete("/:id", loginRequired, usersController.deleteUser);

export { userRoutes };
