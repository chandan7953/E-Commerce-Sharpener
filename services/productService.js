export const getAllProducts = () => {
  return "Fetching all products (from productService)";
};

export const addProduct = (data) => {
  return {val: data};
};

export const getProductById = (id) => {
  return `Fetching product with ID: ${id} (from productService)`;
};
