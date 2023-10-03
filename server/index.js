import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import path from "path";

//importing Routes

import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import dataRoutes from "./routes/data.js"


//importing Schemas for MongoDb
import Book from "./models/Book.js";
import Member from "./models/Member.js";
import Transaction from "./models/Transaction.js";

//importing mock data
import { dataBook, dataMember, dataTransaction } from "./data/index.js";


//setting .env file
dotenv.config();

//creating server
const app = express();
app.use(express.json());

//setting middlewares
app.use(helmet());
//enabling cross-origin 
app.use(
    helmet.crossOriginResourcePolicy({
        policy: "cross-origin",
    })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


/* ROUTES */
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/data", dataRoutes);


// Connecting frontend, use when frontend build is generated and ready to be deployed.
// Serve static files from the React app in production
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(path.resolve(), './client/build')));
//     app.get('*', function (req, res) {
//         res.sendFile(path.join(path.resolve(), "./client/build/index.html"), function (err) {
//             res.status(500).send(err);
//         })
//     });
// }


/* MONGOOSE SETUP*/
//setting mongodb server
const PORT = process.env.PORT || 80;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {

        app.listen(PORT, () => console.log(`Connected to MongoDB... ${PORT}`))
        // Adding mock data to backend
        // Commented to protect reuploading of mock data to mongoDB
        // Book.insertMany(dataBook);
        // Member.insertMany(dataMember);
        // Transaction.insertMany(dataTransaction);

    })
    .catch((err) => console.error("Could not connect to MongoDB...", err));
