import express from "express";
import {
  createInfo,
  getAllInfo,
  getInfoById,
} from "../controllers/infoController.js";

const router = express.Router();

// Tüm contact'ları listeleme ve contact oluşturma
router.get("/", getAllInfo).post("/", createInfo);

router.get("/:id", getInfoById);

export default router;
