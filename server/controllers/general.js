import Books from "../models/Book.js";


export const getBooks = async (req, res) => {
    try {

        const Book = await Books.find();



        res.status(200).json(Book);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

