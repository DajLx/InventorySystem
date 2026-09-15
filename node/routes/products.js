import { Router } from "express";
import * as productControllers from "../controller/products.js";

const router = Router();

router.get("/", productControllers.getAllProducts);

export default router;
