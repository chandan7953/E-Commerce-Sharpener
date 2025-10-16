import express from "express";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

const app = express();
const PORT = 4000;

// Home Route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the E-Commerce API</h1>");
});

// Use Routers
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).send("<h1>404 - Page not found</h1>");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
