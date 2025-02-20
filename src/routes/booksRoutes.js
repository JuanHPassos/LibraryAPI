import express from "express";
import BookController from "../controllers/bookController.js";
import page from "../middlewares/page.js";

// stores and manages routes
const routes = express.Router();

routes.get("/books", BookController.listBooks, page)
    .get("/books/search", BookController.listBooksByFilter, page)
    .get("/books/:id", BookController.listBookById)
    .post("/books", BookController.registerBook)
    .put("/books/:id", BookController.updateBook)
    .delete("/books/:id", BookController.deleteBook);

export default routes;