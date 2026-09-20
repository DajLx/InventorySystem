import { Router } from "express";
import * as supplierControllers from "../controller/suppliers.js";

const router = Router();

router.get("/", supplierControllers.getAllSuppliers);

export default router;
