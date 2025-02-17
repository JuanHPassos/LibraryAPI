import express from "express";

// Initializes an Express server
const app = express();

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

export default app;