import book from "../models/Book.js";
import { author } from "../models/Author.js"

class BookController {

    static async listBooks (req, res, next) {

        try {
            // return everything in book collection
            const listBooks = await book.find({});
            res.status(200).json(listBooks);
        } catch (error) {
            next(error);
        }
    }
    
    static async listBookById (req, res, next) {

        try {
            const id = req.params.id;
            const bookFound = await book.findById(id);
            res.status(200).json(bookFound);
        } catch (error) {
            next(error);
        }
    }

    // Create new book (using requisition/method post)
    static async registerBook (req, res, next) {
        try {
            const newBook = await book.create(req.body);
            res
                .status(201)
                .json({ message: "Successfully registered book", book: createdBook });
        } catch (error) {
            next(error);
        }
    }

    static async updateBook (req, res, next) {
        
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Successfully update book"});
        } catch (error) {
            next(error);
        }
    }

    static async deleteBook (req, res, next) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res.status(200).json({ message: "Successfully delete book"});
        } catch (error) {
            next(error);
        }
    }

    static async listBooksByPublisher (req, res, next) {
        const publisher = req.query.publisher;
        try {
            const booksByPublisher = await book.find({ publisher: publisher});
            res.status(200).json(booksByPublisher);
        } catch (error) {
            next(error);
        }
    }
};

export default BookController;