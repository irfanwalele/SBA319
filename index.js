import "dotenv/config";

import express from "express";
import db from "./db.js";

import bookRoutes from "./routes/bookRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

const app = express();

const port = 3000;

app.use(express.json());

app.use("/books", bookRoutes);
app.use("/members", memberRoutes);
app.use("/reviews", reviewRoutes);

// adding one simple safety net so the server returns a clear error instead of crashing
app.use((err, req, res, next) => {
  res.status(400).json({ error: err.message });
});

app.listen(port, () => {
  console.log("Listening on port: " + port);
});