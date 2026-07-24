const express= require("express")
const router= express.Router();
const {getAllProducts} = require("../controller/productos")
//aca iran todos los endpoints de productos.

router.get("/", getAllProducts)


module.exports= router;