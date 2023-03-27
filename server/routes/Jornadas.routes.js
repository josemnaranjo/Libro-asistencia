import { Router } from "express";
import { addJornada, updateHoraDeLlegadaEnJornada, getJornadaInfoOfATrabajador  } from '../controllers/jornada.controller.js';

const router = Router();


router.post('/api/crear-jornada',addJornada);
router.put('/api/actualizar-hora-termino',updateHoraDeLlegadaEnJornada);
router.post('/api/obtener-info-jornada/:date',getJornadaInfoOfATrabajador);


export default router