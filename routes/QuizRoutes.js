import express from 'express'
import { createQuiz, obtenerQuizes, obtenerQuiz, deleteQuiz } from '../controllers/QuizController.js';
import checkAuth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create', checkAuth, createQuiz)
router.get('/', obtenerQuizes)
router.get('/:id', obtenerQuiz)
router.delete('/:id', checkAuth, deleteQuiz)


export default router;