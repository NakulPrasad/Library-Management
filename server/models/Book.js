import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
    {
        bookID: { type: Number, require: true },
        title: { type: String, required: true },
        authors: { type: String, required: true },
        average_rating: { type: Number, require: false },
        isbn: { type: String, require: false },
        isbn13: { type: Number, require: false },
        language_code: { type: String, require: false },
        ratings_count: { type: Number, require: false },
        publisher: { type: String, require: false },
        publication_date: { type: String, require: false },

        quantity: { type: Number, required: false },
    },

);

const Books = mongoose.model("books", BookSchema);
export default Books;