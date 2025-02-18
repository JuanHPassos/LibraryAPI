import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectToDatabase();

// waits for the error event
connection.on("error", (error) => {
    console.error("connection error", error);
});

// waits for the connection event
connection.once("open", () => {
    console.log("Sucessfully connection with database");
});

// Initializes an Express server
const app = express();
routes(app);

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