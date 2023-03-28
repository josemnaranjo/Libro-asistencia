import { Router } from "express";
import { addJornada, updateHorasEnJornada  } from '../controllers/jornada.controller.js';

const router = Router();


router.post('/api/crear-jornada',addJornada);
router.put('/api/actualizar-hora-jornada',updateHorasEnJornada);


export default router