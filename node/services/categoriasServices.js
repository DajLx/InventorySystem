const pool = require("../bd");

class CategoriaServices {
  static columnasPermitidas = {
    id: "c.idcategoria",
    "nombre categoria": "c.nombre",
    "cantidad productos": "count( p.idproductos)",
  };
  static async getCategories(sort) {
    const [rows, fields] = await pool.query(
      `SELECT c.idcategoria as ID, c.nombre as "Nombre Categoria", count( p.idproductos) as "Cantidad Productos"  FROM categoria c INNER JOIN productos p ON p.categoria_id= c.idcategoria GROUP BY c.idcategoria order by ${this.columnasPermitidas[sort.toLowerCase()]||1}`,
    );
    return rows;
  }
}

module.exports = CategoriaServices;
