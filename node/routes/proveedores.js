const express = require("express");
const router = express.Router();
const { getAllProveedors } = require("../controller/proveedores");
router.get("/", getAllProveedors);

module.exports = router;
