const express = require("express");
const router = express.Router();
const { getAllProveedors } = require("../controller/proveedores");
router.get("/:sort", getAllProveedors);

module.exports = router;
