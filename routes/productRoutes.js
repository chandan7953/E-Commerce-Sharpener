import express from "express";
import { getAllProductsController, addProductController, getProductByIdController } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProductsController);
router.post("/", addProductController);
router.get("/:id", getProductByIdController);

export default router;
