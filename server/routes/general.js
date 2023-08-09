import express from 'express';
import { getBooks } from "../controllers/general.js"
const router = express.Router();


router.get("/dashboard", getBooks);

export default router;