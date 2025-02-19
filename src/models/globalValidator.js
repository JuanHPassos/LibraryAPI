import mongoose from "mongoose";

// sets ownership for all fields in that template
mongoose.Schema.Types.String.set("validate", {
    validator: (value) => value.trim() !== "",
    message: ({ path }) => `The ${path} field was provided blank` 
});