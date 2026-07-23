import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const members = await db.collection("members").find({}).toArray();
  res.status(200).json(members);
});

export default router;