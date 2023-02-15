import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import conectarDB from './config/database.js';
import QuestionRouter from './routes/QuestionRoutes.js'
import AdminRouter from './routes/AdminRoutes.js'
import QuizRouter from './routes/QuizRoutes.js'

dotenv.config();

const app = express();
conectarDB();

//Midddleware
app.use(express.json());
app.use(cors());

app.use('/api/questions', QuestionRouter)
app.use('/api/admin', AdminRouter)
app.use('/api/quiz', QuizRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running in the port', PORT)
})