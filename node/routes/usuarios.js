const express= require("express")
const router= express.Router();
const {login}= require("../controller/usuarios")

// aca iran todos los endpoints de usuarios.

router.post("/login", login)


module.exports= router;