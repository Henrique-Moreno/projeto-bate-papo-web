import { Router } from "express";

import { CreateUserController } from "./controller/user/CreateUserController.js";
import { AuthUserController } from "./controller/user/AuthUserController.js";
import { DetailUserController } from "./controller/user/DetailUserController.js";

import { isAuthenticated } from "./middlewares/isAuthenticated.js";

import { CreateMessageController } from "./controller/message/CreateMessageController.js";

import { RegisterUserController } from "./controller/registerUser/registerUserController.js";
import { ListMessageController } from "./controller/message/ListMessageController.js";
import { ListRegisterUserController } from "./controller/registerUser/ListRegisterUserController.js";

const router = Router();

// Rotas User
router.post('/users', new CreateUserController().handle)
router.get('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

// Rotas Messagem
router.post("/message", isAuthenticated, new CreateMessageController().handle)
router.get("/message", isAuthenticated, new ListMessageController().handle)

//Rotas Register
router.post("/register", isAuthenticated, new RegisterUserController().handle)
router.get("/register", isAuthenticated, new ListRegisterUserController().handle)

export { router }