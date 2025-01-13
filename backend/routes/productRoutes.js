import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductsById,
} from "../controllers/productController.js";
import { logoutUser } from "../controllers/userController.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductsById);
router.post("/logout", logoutUser);

export default router;
