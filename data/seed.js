import "dotenv/config";
import db from "../db.js";

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    available: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    available: true,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    available: false,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    available: true,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    available: true,
  },
];

const members = [
  {
    name: "Alex Johnson",
    email: "alex@example.com",
    membershipType: "Standard",
  },
  {
    name: "Maria Lopez",
    email: "maria@example.com",
    membershipType: "Premium",
  },
  {
    name: "David Smith",
    email: "david@example.com",
    membershipType: "Standard",
  },
  {
    name: "Sarah Brown",
    email: "sarah@example.com",
    membershipType: "Premium",
  },
  {
    name: "Kevin Lee",
    email: "kevin@example.com",
    membershipType: "Standard",
  },
];

async function seedDatabase() {
  try {
    const booksCollection = db.collection("books");
    const membersCollection = db.collection("members");
    const reviewsCollection = db.collection("reviews");

    // Clear old sample data so running the seed file does not create duplicates
    await booksCollection.deleteMany({});
    await membersCollection.deleteMany({});
    await reviewsCollection.deleteMany({});

    const bookResult = await booksCollection.insertMany(books);
    const memberResult = await membersCollection.insertMany(members);

    const reviews = [
      {
        bookId: bookResult.insertedIds[0],
        memberId: memberResult.insertedIds[0],
        rating: 5,
        comment: "A great classic novel.",
      },
      {
        bookId: bookResult.insertedIds[1],
        memberId: memberResult.insertedIds[1],
        rating: 4,
        comment: "Interesting and thought-provoking.",
      },
      {
        bookId: bookResult.insertedIds[2],
        memberId: memberResult.insertedIds[2],
        rating: 5,
        comment: "A fun fantasy adventure.",
      },
      {
        bookId: bookResult.insertedIds[3],
        memberId: memberResult.insertedIds[3],
        rating: 4,
        comment: "Simple and inspirational.",
      },
      {
        bookId: bookResult.insertedIds[4],
        memberId: memberResult.insertedIds[4],
        rating: 5,
        comment: "Very useful advice.",
      },
    ];

    await reviewsCollection.insertMany(reviews);

    console.log("Database seeded successfully");
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
}

seedDatabase();