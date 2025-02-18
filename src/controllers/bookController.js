import book from "../models/book.js"

class BookController {

    static async listBooks (req, res) {

        try {
            // return everything in book collection
            const listBooks = await book.find({});
            res.status(200).json(listBooks);
        } catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - request failed`});
        }
    }
    
    static async listBookById (req, res) {

        try {
            const id = req.params.id;
            const bookFound = await book.findById(id);
            res.status(200).json(bookFound);
        } catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - book request failed`});
        }
    }

    // Create new book (using requisition/method post)
    static async registerBook (req, res) {
        try {
            const newBook = await book.create(req.body);
            res
                .status(201)
                .json({ message: "Successfully registered book", book: newBook });
        } catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - failed to register book`});
        }
    }

    static async updateBook (req, res) {
        
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Successfully update book"});
        } catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - book update failed`});
        }
    }

    static async deleteBook (req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res.status(200).json({ message: "Successfully delete book"});
        } catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - book delete failed`});
        }
    }
};

export default BookController;