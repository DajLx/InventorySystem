import ProductServices from "../services/products.js";

export const getAllProducts = async (req, res) => {
  try {
    const { sort, order } = req.query;
    const products = await ProductServices.getProducts(sort, order);

    res.status(200).send({ products });
  } catch (err) {
    res.status(500).send({ error: "Unexpected error:", message: err.message });
  }
};
