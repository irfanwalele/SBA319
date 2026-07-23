import express from "express";
import db from "../db.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  const reviews = await db.collection("reviews").find({}).toArray();
  res.status(200).json(reviews);
});

router.post("/", async (req, res) => {
  const result = await db.collection("reviews").insertOne(req.body);

  res.status(201).json(result);
});

//allowing users to update an existing book, member, or review by its MongoDB ID
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates = { $set: req.body };

  const result = await db.collection("reviews").updateOne(query, updates);

  res.status(200).json(result);
});

//letting users remove a book, member, or review by its MongoDB ID.
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const result = await db.collection("reviews").deleteOne(query);

  res.status(200).json(result);
});

export default router;