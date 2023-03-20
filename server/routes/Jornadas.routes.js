import { Router } from "express";
import { addJornada } from '../controllers/jornada.controller.js';

const router = Router();


router.post('/api/crear-jornada',addJornada);

export default router