import express from 'express';
import { deleteMember, getMember, getMembers, addMember, editMember, searchMember, issueBook, returnBook, importBook } from '../controllers/management.js';


const router = express.Router();
router.get('/edit/member/:id', getMember);
router.get("/members", getMembers);
router.delete('/edit/member/:id', deleteMember);
router.post('/edit/addMember', addMember);
router.put('/edit/member/:id', editMember);
router.get('/searchMember', searchMember)
router.post('/issueBook', issueBook);
router.post('/returnBook', returnBook);
router.post('/importBook', importBook);


export default router;