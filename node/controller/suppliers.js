import SupplierServices from "../services/suppliers.js";

export const getAllSuppliers = async (req, res) => {
  try {
    const { sort, order } = req.query;
    const suppliers = await SupplierServices.getSuppliers(sort, order);

    res.status(200).send({ suppliers });
  } catch (err) {
    res.status(500).send({ error: "Unexpected error:", message: err.message });
  }
};
