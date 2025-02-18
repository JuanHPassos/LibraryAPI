import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

// Create Schema
const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true},
    publisher: { type: String },
    price: { type: Number },
    pages: { type: Number },
    autor: authorSchema
}, { versionKey: false });

// Create model ( object: collection at database - "interface" )
const book = mongoose.model("books", bookSchema);

export default book;