import { author } from "../models/Author.js";

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
                res.status(404).send({message: "Author ID not found"})    
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
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Successfully update author"});
        } catch (error) {
            next(error);
        }
    };

    static async deleteAuthor (req, res, next) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({ message: "Successfully delete author"});
        } catch (error) {
            next(error)    
        }
    };
};

export default AuthorController;