import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to Jina Express API");
});

router.get("/hello", (req, res) => {
  res.send("Hello World");
});

router.post("/ask", (req, res) => {
  const { qst } = req.body;
  res.send("this is your question: " + qst);
});

router.post("/show/:id", (req, res) => {
  res.send("this is your id: " + req.params.id);
});

export default router;
