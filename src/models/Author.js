import mongoose from "mongoose";

// Create Schema
const authorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { 
        type: String, 
        required: [true, "The author's name is required"]
    },
    nacionality: { type: String }
}, { versionKey: false });

// Create model ( object: collection at database - "interface" )
const author = mongoose.model("authors", authorSchema);

export { author, authorSchema };