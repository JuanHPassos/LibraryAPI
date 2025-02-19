import book from "../models/Book.js";
import { author } from "../models/Author.js"

class BookController {

    static listBooks = async (req, res, next) => {
        try {
            // return everything in book collection
            const booksResults = await book.find({})
                .populate("author")
                .exec();
            res.status(200).json(booksResults);
        } catch (error) {
            next(error);
        }
    };
    
    static listBookById = async (req, res, next) => {
        try {
            const id = req.params.id;
            const bookFound = await book.findById(id)
                .populate("author", "name")
                .exec();
            res.status(200).json(bookFound);
        } catch (error) {
            next(error);
        }
    }

    // Create new book (using requisition/method post)
    static registerBook = async (req, res, next) => {
        try {
            const newBook = new book(req.body);

            const bookResult = await newBook.save();
            
            res
                .status(201)
                .json({ message: "Successfully registered book", book: bookResult });
        } catch (error) {
            next(error);
        }
    }

    static updateBook = async (req, res, next) => {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);

            res.status(200).json({ message: "Successfully update book"});
        } catch (error) {
            next(error);
        }
    }

    static deleteBook = async (req, res, next) => {
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
            const booksByPublisher = await book.find({"publisher": publisher});
            res.status(200).json(booksByPublisher);
        } catch (error) {
            next(error);
        }
    }
};

export default BookController;