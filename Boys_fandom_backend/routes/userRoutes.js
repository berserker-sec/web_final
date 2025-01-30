import express from "express";
import { login, register, getCurrentUser } from "../controllers/userController.js";
import validateToken from "../middleware/validateTokenHandler.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/current", validateToken, getCurrentUser);

export default router;