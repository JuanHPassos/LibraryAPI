import express from "express";
import AuthorController from "../controllers/authorController.js";
import page from "../middlewares/page.js";

// stores and manages routes
const routes = express.Router();

routes.get("/authors", AuthorController.listAuthors, page);
routes.get("/authors/:id", AuthorController.listAuthorById);
routes.post("/authors", AuthorController.registerAuthor);
routes.put("/authors/:id", AuthorController.updateAuthor);
routes.delete("/authors/:id", AuthorController.deleteAuthor);

export default routes;