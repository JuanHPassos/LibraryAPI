import NotFound from "../errors/NotFound.js";
import CastError from "../errors/CastError.js"
import { author, book } from "../models/index.js";

class BookController {

    static listBooks = async (req, res, next) => {
        try {
            const searchBooks = book.find();

            req.result = searchBooks;

            next();
        } catch (error) {
            next(error);
        }
    };
    
    static listBookById = async (req, res, next) => {
        try {
            const id = req.params.id;
            const bookFound = await book.findById(id)

            if (bookFound !== null) {
                res.status(200).json(bookFound);
            } else {
                next(new NotFound("Book ID not found"));    
            }
        } catch (error) {
            next(error);
        }
    };

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
    };

    static updateBook = async (req, res, next) => {
        try {
            const id = req.params.id;

            const bookFound = await book.findByIdAndUpdate(id, {$set: req.body});

            if (bookFound !== null) {
                res.status(200).json({ message: "Successfully update book"});
            } else {
                next(new NotFound("Book ID not found"));    
            }
        } catch (error) {
            next(error);
        }
    };

    static deleteBook = async (req, res, next) => {
        try {
            const id = req.params.id;

            const bookFound = await book.findByIdAndDelete(id);

            if (bookFound !== null) {
                res.status(200).json({ message: "Successfully delete book"});
            } else {
                next(new NotFound("Book ID not found"));    
            }
        } catch (error) {
            next(error);
        }
    };

    static async listBooksByFilter (req, res, next) {
        try {
            const search = await processSearch(req.query);

            if (search !== null){
                const booksResults = book.find(search)

                req.result = booksResults;

                next();
            } else {
                res.status(200).send([]);
            }
        } catch (error) {
            next(error);
        }
    };
};

async function processSearch (params) {
    const { publisher, title, minPages, maxPages, authorName } = params;

    const search = {};

    if (publisher) search.publisher = publisher;
    if (title) search.title = { $regex: title, $options: "i"};

    // initializes if there is a search for pages
    if (minPages || maxPages) search.pages = {}; 

    if (minPages) search.pages.$gte = minPages;
    if (maxPages) search.pages.$lte = maxPages;

    if (authorName) {
        const authorFound = await author.findOne({ name: authorName });

        if (authorFound !== null) {
            search.author = authorFound._id;
        } else {
            return null;
        }
    }
    return search;
}

export default BookController;