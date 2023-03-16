import { Router } from "express";
import {addTrabajador} from '../controllers/trabajador.controller.js';

const router = Router();

router.post('/api/crear-trabajador', addTrabajador);


export default router;
