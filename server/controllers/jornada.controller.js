import { Jornada } from "../models/Jornadas.js";
import { Trabajador } from "../models/Trabajador.js";
import path from 'path';
import { fileURLToPath } from 'url';
import {wb, colEstilo, contenidoEstilo } from '../config/excel4node.config.js';
import fs from 'fs';
import { col } from "sequelize";
import dayjs from "dayjs";


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// let date = new Date();
// let fechaMes = (date.getUTCMonth())+1;
// let fechaAno = date.getFullYear();

export const registroDeEntrada = async(req,res)=> {
    try{
        const {date} = req.params;
        const {rut}=req.body;
        const horaInicio = dayjs().hour()+":"+dayjs().minute()+":"+dayjs().second();

        const trabajador = await Trabajador.findAll({
            where:{
                rut:rut
            }
        });

        const trabajadorId = trabajador[0].id;

        const nuevaJornada = await Jornada.create({date,horaInicio,trabajadorId});

        res.json({message:"Registro de ingreso creado exitosamente", nuevaJornada })

    }catch(err){
        res.status(500).json({error:"Algo salió mal al crear la nueva jornada",err})
    }
};

export const registroDeSalida = async(req,res)=> {
    try{
        const {date} = req.params;
        const {rut}=req.body;
        const horaTermino = dayjs().hour()+":"+dayjs().minute()+":"+dayjs().second();

        const trabajador = await Trabajador.findAll({
            where:{
                rut:rut
            }
        });

        const trabajadorId = trabajador[0].id;

        await Jornada.update({horaTermino},{where:{date:date,trabajadorId:trabajadorId}});

        res.json({message:"Registro de salida creado exitosamente"})

    }catch(err){
        res.status(500).json({error:"Algo salió mal al crear la nueva jornada",err})
    }
};

export const registroDeAusente = async(req,res)=>{
    try{
        const {date} = req.params;
        const {rut} = req.body;


        const trabajador = await Trabajador.findAll({
            where:{
                rut:rut
            }
        });
        
        const trabajadorId = trabajador[0].id;

        await Jornada.update({ausente: true}, {where:{date:date,trabajadorId:trabajadorId}});

        res.json({message:"Registro de ausencia actualizado exitosamente"})

    }catch(err){
        res.status(500).json({error:"Algo salió mal al registrar la ausencia del trabajador",err})
    }
}