import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
    {
        bookID: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
        email: {
            type: String,
            ref: "email",
            required: true,
        },

        dueDate: { type: Date, required: true },
        returnDate: { type: Date },
        lateFee: { type: Number, default: 0 },
    },
    { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
