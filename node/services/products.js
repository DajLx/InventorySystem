import pool from "../db.js";

class ProductServices {
  static allowedCols = {
    id: "p.id",
    name: "p.name",
    category: "c.name",
    stock: "p.stock",
    price: "p.price",
  };
  static allowedDrctns = ["ASC", "DESC"];

  static async getProducts(sort, order) {
    const sanitizedCols = this.allowedCols[sort] || this.allowedCols.id;
    const sanitizedDrctns = this.allowedDrctns.includes(order?.toUpperCase())
      ? order.toUpperCase
      : "ASC";

    const [rows] = await pool.query(
      `SELECT p.id, p.name, c.name AS category, p.stock, p.price FROM products p INNER JOIN categories c ON p.category_id = c.id ORDER BY ${sanitizedCols} ${sanitizedDrctns}`,
    );

    return rows;
  }
}

export default ProductServices;
