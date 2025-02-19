import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

// Create Schema
const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: {
        type: String, 
        required: [true, "The book's title is mandatory"]
    },
    publisher: { 
        type: String 
    },
    price: { 
        type: Number 
    },
    pages: {
        type: Number, 
        min: [1, "The number of pages must be between 10 and 5000. Value provided: {VALUE}"],
        max: [5000, "The number of pages must be between 10 and 5000. Value provided: {VALUE}"]
    },
    author: authorSchema
}, { versionKey: false });

// Create model ( object: collection at database - "interface" )
const book = mongoose.model("books", bookSchema);

export default book;