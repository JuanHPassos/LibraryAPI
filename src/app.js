import express from "express";

// Initializes an Express server
const app = express();
// Middleware (Helps to accept JSON format)
app.use(express.json());

const books = [
    {
        id: 1,
        title: "The lord of the rings"
    },
    {
        id: 2,
        title: "The Hobbit"
    }
]

// Manages routes (using GET method/request)
app.get("/", (req, res) => {
    res.status(200).send("Curse of Node.js");
});

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

// Create new book (using requisition/method post)
app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).send("Successfully registered book")
});

export default app;