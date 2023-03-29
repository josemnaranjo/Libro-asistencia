import { Router } from "express";
import {addTrabajador, getAllTrabajadores, deleteOneTrabajador, getAllTrabajadoresOfAJornada, getInformeMes } from '../controllers/trabajador.controller.js';

const router = Router();

router.post('/api/crear-trabajador', addTrabajador);
router.get('/api/get-all-trabajadores',getAllTrabajadores);
router.delete('/api/delete-trabajador',deleteOneTrabajador);
router.get('/api/obtener-jornada/:date',getAllTrabajadoresOfAJornada);
router.post('/api/obtener-informe-mes',getInformeMes)

export default router;
