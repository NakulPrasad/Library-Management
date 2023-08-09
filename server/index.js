import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";

import path from "path";


//data db imports
import Books from "./models/Book.js";
import Member from "./models/Member.js";
import { dataBook, dataMember } from "./data/index.js";



// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());

app.use(
    helmet.crossOriginResourcePolicy({
        policy: "cross-origin",
    })
);
app.use(morgan(" common "));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


/* ROUTES */
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);


// Connecting frontend
// Serve static files from the React app in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(path.resolve(), './client/build')));
    app.get('*', function (req, res) {
        res.sendFile(path.join(path.resolve(), "./client/build/index.html"), function (err) {
            res.status(500).send(err);
        })
    });
}


/* MONGOOSE SETUP*/
// 
const PORT = process.env.PORT || 80;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {

        app.listen(PORT, () => console.log(`Connected to MongoDB... ${PORT}`))
        // data adds only one time
        // Books.insertMany(dataBook);
        // Member.insertMany(dataMember);

    })
    .catch((err) => console.error("Could not connect to MongoDB...", err));
