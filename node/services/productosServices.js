const pool = require("../bd");
class ProductosServices {
  static columnasPermitidas = {
    id: "p.idproductos",
    nombre: "p.nombre",
    categoria: "c.nombre",
    stock: "p.stock",
    precio: "p.precio",
  };
  static async getProducts(sort) {
    console.log(sort);
    const [rows, fields] = await pool.query(
      `SELECT p.idproductos as ID, p.nombre as Nombre, c.nombre as Categoria, p.stock as Stock, p.precio as Precio  FROM productos p INNER JOIN categoria c ON p.categoria_id=c.idcategoria order by ${this.columnasPermitidas[sort.toLocaleLowerCase()]||1}`,
      [sort],
    );
    console.log(rows);
    return rows;
  }
}

module.exports = ProductosServices;
