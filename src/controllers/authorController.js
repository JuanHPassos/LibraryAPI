import { author } from "../models/Author.js";

class AuthorController {

    static async listAuthors (req, res) {

        try {
            // return everything in author collection
            const listAuthors = await author.find({});
            res.status(200).json(listAuthors);
        } catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - request failed`});
        }
    }
    
    static async listAuthorById (req, res) {

        try {
            const id = req.params.id;
            const authorFound = await author.findById(id);
            res.status(200).json(authorFound);
        } catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - author request failed`});
        }
    }

    // Create new author (using requisition/method post)
    static async registerAuthor (req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res
                .status(201)
                .json({ message: "Successfully registered author", author: newAuthor });
        } catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - failed to register author`});
        }
    }

    static async updateAuthor (req, res) {
        
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Successfully update author"});
        } catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - author update failed`});
        }
    }

    static async deleteAuthor (req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({ message: "Successfully delete author"});
        } catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - author delete failed`});
        }
    }
};

export default AuthorController;