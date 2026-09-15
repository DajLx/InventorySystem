import { Router } from "express";

const router = Router();

import userRoutes from "./users.js";
import supplierRoutes from "./suppliers.js";
import productRoutes from "./products.js";
import categoryRoutes from "./categories.js";

router.use("/users", userRoutes);
router.use("/suppliers", supplierRoutes);
router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);

export default router;
