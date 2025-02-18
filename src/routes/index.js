import express from "express";
// book routes
import books from "./booksRoutes.js";
import authors from "./authorsRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curse of Node.js"));

    // get middleware json and books routes
    app.use(express.json(), books, authors);
};

export default routes;