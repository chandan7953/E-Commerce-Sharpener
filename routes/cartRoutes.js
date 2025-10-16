import express from "express";
import { getUserCart, addToUserCart } from "../controllers/cartController.js";

const router = express.Router();

router.get("/:userId", getUserCart);
router.post("/:userId", addToUserCart);

export default router;
