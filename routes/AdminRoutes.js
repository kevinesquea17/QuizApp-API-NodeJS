import { autenticar, registrarAdmin } from "../controllers/AdminController.js";
import express from 'express'

const router = express.Router();

router.post('/register', registrarAdmin)
router.post('/login', autenticar)

export default router;

