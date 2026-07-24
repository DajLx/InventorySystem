const express = require("express");
const router= express.Router();
const userRoute= require("./usuarios")
const productosRoute= require("./productos")
const categoriaRoute = require("./categorias")
const proveedoresRoute= require("./proveedores")
 router.use("/productos", productosRoute)
router.use("/categorias", categoriaRoute)
router.use("/proveedores",proveedoresRoute)
router.use("/usuarios",userRoute)

module.exports= router;