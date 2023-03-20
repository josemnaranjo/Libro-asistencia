import { Jornada } from "../models/Jornadas.js";
import path from 'path';
import { fileURLToPath } from 'url';
import {wb, colEstilo, contenidoEstilo } from '../config/excel4node.config.js';
import fs from 'fs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let date = new Date();
let fechaMes = (date.getUTCMonth())+1;
let fechaAno = date.getFullYear();

export const addJornada = async(req,res)=> {
    try{
        const { trabajadorId , date } = req.body;
        const newJornada = await Jornada.create({
            date,
            trabajadorId
        });
        res.json(newJornada);
    }catch(err){
        res.status(500).json({error:"Algo salió mal al crear la nueva jornada",err})
    }
}