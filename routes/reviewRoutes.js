import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const reviews = await db.collection("reviews").find({}).toArray();
  res.status(200).json(reviews);
});

router.post("/", async (req, res) => {
  const result = await db.collection("reviews").insertOne(req.body);

  res.status(201).json(result);
});

export default router;