import CategoryServices from "../services/categories.js";

export const getAllCategories = async (req, res) => {
  try {
    const { sort, order } = req.query;
    const categories = await CategoryServices.getCategories(sort, order);

    res.status(200).send({ categories });
  } catch (err) {
    res.status(500).send({ error: "Unexpected error:", message: err.message });
  }
};
