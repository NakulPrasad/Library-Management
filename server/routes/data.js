import express from 'express';
import { getTransactions } from "../controllers/data.js"
const router = express.Router();

// path: /data
router.get("/transactions", getTransactions);

export default router;