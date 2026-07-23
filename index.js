// setup environment variables
import "dotenv/config";

import express from "express";

// bring in the database connection
import db from "./db.js";

const app = express();

const port = 3000;

// allow the server to read JSON data
app.use(express.json());

app.listen(port, () => {
  console.log("Listening on port: " + port);
});