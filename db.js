import { MongoClient } from "mongodb";

const connectionStr = process.env.MONGO_URI;

const client = new MongoClient(connectionStr);

let connection;

try {
  connection = await client.connect();
  console.log("MongoDB Connected");
} catch (err) {
  console.error(err);
}

const db = connection.db("libraryDB");

export default db;