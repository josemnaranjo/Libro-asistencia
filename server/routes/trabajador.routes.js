import { Router } from "express";
import {addTrabajador, getAllTrabajadores, deleteOneTrabajador, getAllTrabajadoresOfAJornada, getInformeMes, updateTrabajador, getOneTrabajador } from '../controllers/trabajador.controller.js';

const router = Router();

router.post('/api/crear-trabajador', addTrabajador);
router.get('/api/get-all-trabajadores',getAllTrabajadores);
router.delete('/api/delete-trabajador/:rut',deleteOneTrabajador);
router.get('/api/obtener-jornada/:date',getAllTrabajadoresOfAJornada);
router.post('/api/obtener-informe-mes',getInformeMes);
router.put('/api/actualizar-datos-trabajador/:rutTrabajador', updateTrabajador);
router.get('/api/obtener-trabajador/:rut',getOneTrabajador);

export default router;
