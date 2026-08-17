const ProductsServices = require("../services/productosServices");
const getAllProducts = async (req, res) => {
  try {

    const products = await ProductsServices.getProducts();
    
    res.status(200).send(products)
  } catch (error) {
    res.status(500).send("error inesperado")
  }
};

module.exports = { getAllProducts };
