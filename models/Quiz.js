import mongoose from 'mongoose';
import { QuestionSchema } from './Question.js';


const QuizSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    questions: [QuestionSchema]
});

const Quiz = mongoose.model("Quiz", QuizSchema);
export default Quiz;