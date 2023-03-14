import { Router } from "express";
import {addTrabajador} from '../controllers/trabajador.controller.js';

const router = Router();

router.post('/crear-trabajador', addTrabajador);


export default router;
