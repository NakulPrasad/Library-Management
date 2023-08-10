import express from 'express';
import { deleteMember, getMember, getMembers, addMember, editMember } from '../controllers/management.js';


const router = express.Router();
router.get('/edit/member/:id', getMember);
router.get("/members", getMembers);
router.delete('/edit/member/:id', deleteMember);
router.post('/edit/addMember', addMember);
router.put('/edit/member/:id', editMember);

export default router;