export const getAllUsers = (req, res) => {
  res.send("Fetching all users");
};

export const addUser = (req, res) => {
  res.send("Adding a new user");
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  res.send(`Fetching user with ID: ${id}`);
};
