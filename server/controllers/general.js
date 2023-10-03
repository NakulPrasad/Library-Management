import Book from "../models/Book.js";

//Path: /general/dashboard
//Method: get

export const getAllBooks = async (req, res) => {
    try {
        //fetches all books from mongoDB
        const book = await Book.find();
        //if sucess then returns bookJSON
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

