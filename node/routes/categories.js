import { Router } from "express";
import * as categoryControllers from "../controller/categories.js";

const router = Router();

router.get("/", categoryControllers.getAllCategories);

export default router;
