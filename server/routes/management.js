import express from 'express';
import {
    deleteMember,
    getMember,
    getMembers, addMember, editMember, issueBook, returnBook, importBook
} from '../controllers/management.js';

const router = express.Router();

//current path : /management

//get Requests
router.get('/edit/member/:id', getMember);
router.get("/members", getMembers);

//post Requests
//issue a book
router.post('/issueBook', issueBook);
//return a book
router.post('/returnBook', returnBook);
//import a book
router.post('/importBook', importBook);
//add a member
router.post('/edit/addMember', addMember);

//put Requests
//edit member
router.put('/edit/member/:id', editMember);

//Delete Requests
//delete Member
router.delete('/edit/member/:id', deleteMember);

export default router;