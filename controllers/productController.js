import { getAllProducts, addProduct, getProductById } from "../services/productService.js";

export const getAllProductsController = (req, res) => {
  res.send(getAllProducts());
};

export const addProductController = (req, res) => {
  const data = req.body.brand;
  res.json(addProduct(data));
};

export const getProductByIdController = (req, res) => {
  const { id } = req.params;
  res.send(getProductById(id));
};
