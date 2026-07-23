import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const books = await db.collection("books").find({}).toArray();
  res.status(200).json(books);
});

router.post("/", async (req, res) => {
  const result = await db.collection("books").insertOne(req.body);

  res.status(201).json(result);
});

export default router;
