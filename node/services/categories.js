import pool from "../db.js";

class CategoryServices {
  static allowedCols = {
    id: "c.id",
    name: "c.name",
    qty: "count(p.id)",
  };
  static allowedDrctns = ["ASC", "DESC"];

  static async getCategories(sort, order) {
    const sanitizedCols = this.allowedCols[sort] || this.allowedCols.id;
    const sanitizedDrctns = this.allowedDrctns.includes(order?.toUpperCase())
      ? order.toUpperCase()
      : "ASC";

    const [rows] = await pool.query(
      `SELECT c.id, c.name, COUNT(p.id) AS quantity FROM categories c INNER JOIN products p ON p.category_id= c.id GROUP BY c.id ORDER BY ${sanitizedCols} ${sanitizedDrctns}`,
    );

    return rows;
  }
}

export default CategoryServices;
