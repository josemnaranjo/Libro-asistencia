import { Router } from "express";
import { registroDeEntrada , updateHorasEnJornada  } from '../controllers/jornada.controller.js';

const router = Router();


router.post('/api/registro-de-entrada/:date',registroDeEntrada );
router.put('/api/actualizar-hora-jornada',updateHorasEnJornada);


export default router