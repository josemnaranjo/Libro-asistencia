import { Router } from "express";
import { registroDeEntrada , registroDeSalida  } from '../controllers/jornada.controller.js';

const router = Router();


router.post('/api/registro-de-entrada/:date',registroDeEntrada );
router.put('/api/registro-de-salida/:date',registroDeSalida);


export default router