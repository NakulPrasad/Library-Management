import express from 'express';
import { deleteMember, getMember } from '../controllers/management.js';


const router = express.Router();
router.get("/members", getMember);
router.delete('/edit/member/:id', deleteMember);

export default router;