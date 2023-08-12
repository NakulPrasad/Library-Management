import Member from "../models/Member.js";
import Book from "../models/Book.js";
import Transaction from "../models/Transaction.js"
import fetch from "node-fetch";


export const getMember = async (req, res) => {
    try {
        const { id } = req.params;
        const member = await Member.findById(id);
        res.status(200).json(member);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
export const getMembers = async (req, res) => {
    try {
        const members = await Member.find().select("-password");
        res.status(200).json(members);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//delete member
export const deleteMember = async (req, res) => {
    try {
        const { id } = req.params;
        await Member.findByIdAndDelete(id);
        res.status(201).json(id);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addMember = async (req, res) => {
    const member = req.body;
    const newMember = new Member(member);

    try {
        await newMember.save();

        res.status(201).json(newMember);
    } catch (error) {
        res.status(409).json(error.message)
    }
}

//updating member:
export const editMember = async (req, res) => {
    let member = req.body;
    const { id } = req.params;

    // Log incoming data for troubleshooting
    // console.log(`Editing member with ID ${id} with data`, member);

    try {
        // Try to update the member
        const updatedMember = await Member.findOneAndUpdate({ _id: id }, member, { new: true });

        // If successful, return updated member
        res.status(201).json(updatedMember);
    } catch (error) {
        // Log the error details
        console.log('Error details:', error);
        res.status(409).json({ message: error.message });
    }
};

//search email
export const searchMember = async (req, res) => {
    try {
        const { email } = req.query;
        const members = await Member.find({ email: new RegExp(email, 'i') });
        res.json(members.map((member) => member.email));
    } catch (error) {
        console.log('Error details:', error);
        res.status(409).json({ message: error.message });
    }
}
//issue book
export const issueBook = async (req, res) => {
    try {
        const { email, bookID } = req.body;

        const member = await Member.findOne({ email });
        if (!member) {
            return res.status(404).json({ error: 'Member not found.' });
        }

        // Check if the member's outstanding debt is >= 500
        if (member.outstanding >= 500) {
            return res.status(400).json({ message: 'Outstanding debt exceeds Rs. 500. Cannot issue a book.' });
        }

        const book = await Book.findOne({ bookID });
        if (!book) {
            return res.status(404).json({ error: 'Book not found.' });
        }

        // Check if the book is available for issuing
        if (book.quantity === 0) {
            return res.status(400).json({ message: 'Book out of stock' });
        }

        // Create a new transaction record
        const transaction = new Transaction({
            email: email,
            bookID: bookID,
            action: "issue",
            outstanding: member.outstanding + 100  // Increase outstanding by 100 per issue
        });
        await transaction.save();

        // Update book quantity
        book.quantity -= 1;
        await book.save();

        // Save changes to the database
        member.bookIssued.push(bookID);
        member.outstanding += 100;  // Increase outstanding by 100 per issue
        await member.save();

        res.json({ message: 'Book issued successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
};


//return book
export const returnBook = async (req, res) => {
    try {
        const { email, bookID } = req.body;

        // Find the member by email
        const member = await Member.findOne({ email });
        if (!member) {
            return res.status(404).json({ error: 'Member not found.' });
        }

        // Find the book by bookID
        const book = await Book.findById(bookID);
        if (!book) {
            return res.status(404).json({ error: 'Book not found.' });
        }

        // Find the transaction record for the book and member
        const transaction = await Transaction.findOne({
            email: member._id,
            bookID,
            returnDate: null,
        });

        if (!transaction) {
            return res.status(400).json({ error: 'Book was not issued to this member.' });
        }

        // Calculate rent fee and update return date
        const currentDate = new Date();
        const daysLate = Math.max(0, Math.floor((currentDate - transaction.issueDate) / (1000 * 60 * 60 * 24)));
        const rentFee = daysLate * book.rentRate; // Assuming rentRate is the daily fee
        transaction.returnDate = currentDate;
        transaction.rentFee = rentFee;

        // Update book quantity
        book.quantity += 1;

        // Save changes to the database
        await transaction.save();
        await book.save();

        res.json({ message: 'Book returned successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
};

//import Book
export const importBook = async (req, res) => {
    const { isbn, quantity } = req.body;
    const id = isbn;

    try {
        // Fetch book data from external API
        const response = await fetch(
            `https://frappe.io/api/method/frappe-library?isbn=${id}`
        );

        if (!response.ok) {
            throw new Error("Error fetching book data from external API");
        }

        const responseData = await response.json(); // Parse response data

        if (responseData.message.length === 0) {
            throw new Error("Book not found in external API");
        }

        const bookData = responseData.message[0]; // Access the first book object

        const {
            bookID,
            title,
            authors,
            average_rating,
            isbn,
            isbn13,
            language_code,
            publication_date,
            publisher,
        } = bookData;

        // Find or create the book in MongoDB
        const existingBook = await Book.findOne({ isbn });

        let book;
        if (existingBook) {
            existingBook.quantity += parseInt(quantity);
            book = existingBook;
        } else {
            book = new Book({
                bookID,
                title,
                authors,
                average_rating,
                isbn,
                isbn13,
                language_code,
                publication_date,
                publisher,
                quantity: parseInt(quantity),
            });
        }
        await book.save();

        res.json({ success: true, message: "Book imported successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error importing book." });
    }
};

