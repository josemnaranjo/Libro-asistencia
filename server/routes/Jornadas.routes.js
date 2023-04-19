import { Router } from "express";
import { registroDeEntrada , registroDeSalida, registroDeAusente  } from '../controllers/jornada.controller.js';

const router = Router();


router.post('/api/registro-de-entrada/:date',registroDeEntrada );
router.put('/api/registro-de-salida/:date',registroDeSalida);
router.put('/api/registro-ausencia/:date',registroDeAusente);



export default router