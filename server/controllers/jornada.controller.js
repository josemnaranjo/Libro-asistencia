import { Jornada } from "../models/Jornadas.js";
import { Trabajador } from "../models/Trabajador.js";
import path from 'path';
import { fileURLToPath } from 'url';
import {wb, colEstilo, contenidoEstilo } from '../config/excel4node.config.js';
import fs from 'fs';
import { col } from "sequelize";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let date = new Date();
let fechaMes = (date.getUTCMonth())+1;
let fechaAno = date.getFullYear();

export const registroDeEntrada = async(req,res)=> {
    try{
        const {date} = req.params;
        const {horaInicio,rut}=req.body;

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

export const updateHorasEnJornada = async(req,res)=>{
    try{
        const {horaInicio, horaTermino, date, trabajadorId} =req.body;



        if(horaInicio ===''&& horaTermino===''){
            res.json("Debes ingresar un valor en alguno de las horas");
        }

        else if(horaInicio === ''){
            await Jornada.update({horaTermino:horaTermino},{
                where:{
                    trabajadorId:trabajadorId,
                    date:date
                }
            });

            res.json({"Jornada actualizada con éxito. TrabajadorID:": trabajadorId});

        }
        else if(horaTermino === ''){
            await Jornada.update({horaInicio:horaInicio},{
                where:{
                    trabajadorId:trabajadorId,
                    date:date
                }
            });

            res.json({"Jornada actualizada con éxito. TrabajadorID:": trabajadorId});
        }
        else{
            await Jornada.update({horaInicio:horaInicio,horaTermino:horaTermino},{
                where:{
                    trabajadorId:trabajadorId,
                    date:date
                }
            });
            res.json({"Jornada actualizada con éxito. TrabajadorID:": trabajadorId});
        }
        

    }catch{
        res.status(500).json({error:"Algo salió mal al crear la nueva jornada",err})
    }
};


