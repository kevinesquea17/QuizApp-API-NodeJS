import express from 'express';
import { createQuestion } from '../controllers/QuestionController.js';


const router = express.Router();

router.post('/create', createQuestion);



export default router;