import express from "express";
import db from "../db.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  const members = await db.collection("members").find({}).toArray();
  res.status(200).json(members);
});

router.post("/", async (req, res) => {
  const result = await db.collection("members").insertOne(req.body);

  res.status(201).json(result);
});

//allowing users to update an existing book, member, or review by its MongoDB ID
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates = { $set: req.body };

  const result = await db.collection("members").updateOne(query, updates);

  res.status(200).json(result);
});

//letting users remove a book, member, or review by its MongoDB ID.
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const result = await db.collection("members").deleteOne(query);

  res.status(200).json(result);
});

export default router;