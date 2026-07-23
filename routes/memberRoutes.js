import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const members = await db.collection("members").find({}).toArray();
  res.status(200).json(members);
});

router.post("/", async (req, res) => {
  const result = await db.collection("members").insertOne(req.body);

  res.status(201).json(result);
});

export default router;