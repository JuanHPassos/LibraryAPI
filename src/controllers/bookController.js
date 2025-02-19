import NotFound from "../errors/NotFound.js";
import book from "../models/Book.js";

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

            if (bookFound !== null) {
                res.status(200).json(bookFound);
            } else {
                next(new NotFound("Book ID not found"));    
            }
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

            const bookFound = await book.findByIdAndUpdate(id, {$set: req.body});

            if (bookFound !== null) {
                res.status(200).json({ message: "Successfully update book"});
            } else {
                next(new NotFound("Book ID not found"));    
            }
        } catch (error) {
            next(error);
        }
    }

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