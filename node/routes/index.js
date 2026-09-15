import { Router } from "express";

const router = Router();

import userRoutes from "./users.js";
// const productosRoute= require("./productos")
// const categoriaRoute = require("./categorias")
// const proveedoresRoute= require("./proveedores")

router.use("/users", userRoutes);
//  router.use("/productos", productosRoute)
// router.use("/categorias", categoriaRoute)
// router.use("/proveedores",proveedoresRoute)

export default router;
