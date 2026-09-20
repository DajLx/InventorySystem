import pool from "../db.js";

class SupplierServices {
  static allowedCols = {
    id: "id",
    name: "name",
    contact: "contact",
    email: "email",
  };
  static allowedDrctns = ["ASC", "DESC"];

  static async getSuppliers(sort, order) {
    const sanitizedCols = this.allowedCols[sort] || this.allowedCols.id;
    const sanitizedDrctns = this.allowedDrctns.includes(order?.toUpperCase())
      ? order.toUpperCase()
      : "ASC";

    const [rows] = await pool.query(
      `SELECT * FROM suppliers ORDER BY ${sanitizedCols} ${sanitizedDrctns}`,
    );

    return rows;
  }
}

export default SupplierServices;
