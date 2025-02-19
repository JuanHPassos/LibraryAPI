import NotFound from "../errors/NotFound.js";
import { author } from "../models/index.js";

class AuthorController {

    static async listAuthors (req, res, next) {
        try {
            // return everything in author collection
            const listAuthors = await author.find({});
            res.status(200).json(listAuthors);
        } catch (error) {
            next(error);
        }
    };

    static async listAuthorById (req, res, next) {
        try {
            // string
            const id = req.params.id;
            const authorFound = await author.findById(id);

            if (authorFound !== null) {
                res.status(200).json(authorFound);
            } else {
                next(new NotFound("Author ID not found"));    
            }
        } catch (error) {
            next(error);
        }
    };

    // Create new author (using requisition/method post)
    static async registerAuthor (req, res, next) {
        try {
            // const newAuthor = await author.create(req.body);
            const newAuthor = new author(req.body);

            const authorResult = await newAuthor.save();

            res
                .status(201)
                .json({ message: "Successfully registered author", author: authorResult });
        } catch (error) {
            next(error);
        }
    };

    static async updateAuthor (req, res, next) {
        try {
            const id = req.params.id;

            const authorResult = await author.findByIdAndUpdate(id, {$set: req.body});

            if (authorResult !== null) {
                res.status(200).json({ message: "Successfully update author"});
            } else {
                next(new NotFound("Author ID not found"));    
            }
        } catch (error) {
            next(error);
        }
    };

    static async deleteAuthor (req, res, next) {
        try {
            const id = req.params.id;

            const authorResult = await author.findByIdAndDelete(id);

            if (authorResult !== null) {
                res.status(200).json({ message: "Successfully delete author"});
            } else {
                next(new NotFound("Author ID not found"));    
            }
        } catch (error) {
            next(error);    
        }
    };
};

export default AuthorController;