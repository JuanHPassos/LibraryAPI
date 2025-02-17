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

// returns index of the fetched element (-1 if it doesn't exist)
function searchBook(id) {
    return books.findIndex(book => {
        // Traffic information as string
        return book.id === Number(id);
    });
}

// Read

// Manages routes (using GET method/request)
app.get("/", (req, res) => {
    res.status(200).send("Curse of Node.js");
});

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
    const bookIndex = searchBook(req.params.id);
    // If the index fetched doesn't exist
    if (bookIndex === -1) {
        return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json(books[bookIndex]);
});

// Create

// Create new book (using requisition/method post)
app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).send("Successfully registered book")
});

// Update

app.put("/books/:id", (req, res) => {
    const bookIndex = searchBook(req.params.id);

    // If the index fetched doesn't exist
    if (bookIndex === -1) {
        return res.status(404).json({ error: "Book not found" });
    }

    // Change the name of the book
    books[bookIndex].title = req.body.title;
    res.status(200).json(books);
})

// Delete

app.delete("/books/:id", (req, res) => {
    const bookIndex = searchBook(req.params.id);

    // If the index fetched doesn't exist
    if (bookIndex === -1) {
        return res.status(404).json({ error: "Book not found" });
    }

    // Delete one element that start at bookIndex
    books.splice(bookIndex, 1);

    res.status(200).send("Book removed successfully");
})

export default app;