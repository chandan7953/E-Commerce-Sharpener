import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Fetching all users");
});

router.post("/", (req, res) => {
  res.send("Adding a new user");
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Fetching user with ID: ${userId}`);
});

export default router;
