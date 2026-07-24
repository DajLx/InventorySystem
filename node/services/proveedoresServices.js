const pool = require("../bd");
class ProveedoresServices {
  static async getProvers() {
    const [rows,fields]= await pool.query(`SELECT idproveedor as ID, nombre as "Nombre Proveedor" ,contacto as Contacto, telefono as Teléfono, correo as Email from proveedor `)
    return rows;
  }
}

module.exports = ProveedoresServices;
