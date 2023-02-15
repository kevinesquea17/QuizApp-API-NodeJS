import Quiz from "../models/Quiz.js"


const createQuiz = async(req, res) => {
    try {
        const quiz = new Quiz(req.body);
        const quizSaved = await quiz.save();
        res.status(200).json(quizSaved);
    } catch (error) {
        const e = new Error('Problemas al crear el Quiz.')
        res.status(403).json({msg: e.message})
    }
}

const obtenerQuizes = async(req, res) => {
    try {
        const quizes = await Quiz.find();
        return res.status(200).json(quizes)
    } catch (error) {
        const e = new Error('No se pudo obtener los quizes.')
        return res.status(403).json({msg: e.message})
    }
}

const obtenerQuiz = async(req, res) => {
    try {
        const {id} = req.params;
        const quiz = await Quiz.findById(id)
        return res.status(200).json(quiz)
    } catch (error) {
        const e = new Error('No se pudo obtener el quiz.')
        return res.status(403).json({msg: e.message})
    }
}

const deleteQuiz = async(req, res) => {
    const {id} = req.params;
    const quiz = await Quiz.findById(id);

    if(!quiz){
        return res.status(403).json({msg: 'Quiz no encontrado.'})
    }
    try {
        await quiz.deleteOne();
        res.status(200).json({msg: 'Quiz eliminado correctamente'});
    } catch (error) {
        const e = new Error('No se pudo eliminar el Quiz');
        res.status(403).json({msg: e.message})
    }
}

export {
    createQuiz,
    obtenerQuizes,
    obtenerQuiz,
    deleteQuiz
}