import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const books = await db.collection("books").find({}).toArray();
  res.status(200).json(books);
});

export default router;