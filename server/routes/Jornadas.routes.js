import { Router } from "express";
import { addJornada, updateHoraDeLlegadaEnJornada } from '../controllers/jornada.controller.js';

const router = Router();


router.post('/api/crear-jornada',addJornada);
router.put('/api/actualizar-hora-termino',updateHoraDeLlegadaEnJornada);


export default router