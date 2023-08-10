import express from 'express';
import { deleteMember, getMember, getMembers } from '../controllers/management.js';


const router = express.Router();
router.get('/edit/member/:id', getMember);
router.get("/members", getMembers);
router.delete('/edit/member/:id', deleteMember);

export default router;