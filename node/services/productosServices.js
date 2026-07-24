const pool= require("../bd")
class ProductosServices{
    static async getProducts (){
        const [rows,fields]= await pool.query("SELECT p.idproductos as ID, p.nombre as Nombre, c.nombre as Categoria, p.stock as Stock, p.precio as Precio  FROM productos p INNER JOIN categoria c ON p.categoria_id=c.idcategoria order by 1")
        return rows;
    }
}

module.exports= ProductosServices;