import { Trabajador } from "../models/Trabajador.js";
import path from 'path';
import { fileURLToPath } from 'url';
import {wb, colEstilo, contenidoEstilo } from '../config/excel4node.config.js';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let date = new Date();
let fechaMes = (date.getUTCMonth())+1;
let fechaAno = date.getFullYear();

export const addTrabajador = async(req,res)=>{
    try{
        const newTrabajador = await Trabajador.create({
            name:req.body.name,
            lastName:req.body.lastName,
            rut: req.body.rut
        });
        res.json({message:"Trabajador creado exitosamente", newTrabajador})

    }catch(err){
        res.status(500).json({error:"Algo salió mal al crear el nuevo trabajador"})
    }
};
