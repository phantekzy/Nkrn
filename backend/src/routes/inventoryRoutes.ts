import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { getInventory, updateStock } from "../controllers/inventoryController";
import { adminMiddleware } from "../middleware/adminMiddleware";

const router = Router();

router.get("/", authMiddleware, getInventory);
router.patch("/:id", authMiddleware, adminMiddleware, updateStock);

export default router;
