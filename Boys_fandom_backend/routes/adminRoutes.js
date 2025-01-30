import express from "express";
import { getAllUsers, adminLogin, createAdmin } from "../controllers/adminController.js";
import validateToken from "../middleware/validateTokenHandler.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/users", validateToken, adminMiddleware, getAllUsers);
router.post("/create", validateToken, adminMiddleware, createAdmin);

export default router;