export const getAllProducts = (req, res) => {
  res.send("Fetching all products");
};

export const addProduct = (req, res) => {
  res.send("Adding a new product");
};

export const getProductById = (req, res) => {
  const { id } = req.params;
  res.send(`Fetching product with ID: ${id}`);
};
