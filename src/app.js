import express from "express";

// Initializes an Express server
const app = express();

// Manages routes
app.get("/", (req, res) => {
    res.status(200).send("Curse of Node.js");
});

export default app;