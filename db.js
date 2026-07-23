import dns from "node:dns";
import { MongoClient } from "mongodb";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectionStr = process.env.MONGO_URI;

const client = new MongoClient(connectionStr);

let connection;

try {
  connection = await client.connect();
  console.log("MongoDB Connected");
} catch (err) {
  console.error("MongoDB connection error:", err);
  process.exit(1);
}

const db = connection.db("libraryDB");

export default db;