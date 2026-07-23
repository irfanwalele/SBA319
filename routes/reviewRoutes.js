import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const reviews = await db.collection("reviews").find({}).toArray();
  res.status(200).json(reviews);
});

export default router;