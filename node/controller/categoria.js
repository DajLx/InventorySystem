const CategoriaServices = require("../services/categoriasServices");

const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoriaServices.getCategories(req.params.sort);
    res.status(200).send(categories)
  } catch (error) {
    res.status(500).send("error inesperado")
  }
};

module.exports = { getAllCategories };
