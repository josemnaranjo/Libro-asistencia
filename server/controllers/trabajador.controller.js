import { Trabajador } from "../models/Trabajador.js";
import { Jornada } from "../models/Jornadas.js";
import { Op } from 'sequelize';
import path from 'path';
import { fileURLToPath } from 'url';
import {wb, colEstilo, contenidoEstilo } from '../config/excel4node.config.js';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



export const addTrabajador = async(req,res)=>{
    try{
        const {name,lastName,rut} = req.body;
        const newTrabajador = await Trabajador.create({
            name:name,
            lastName:lastName,
            rut:rut
        });
        res.json({message:"Trabajador creado exitosamente", newTrabajador})

    }catch(err){
        res.status(500).json({error:"Algo salió mal al crear el nuevo trabajador",err})
    }
};

export const getAllTrabajadores = async (req,res)=> {
    try{
        const trabajadores = await Trabajador.findAll();
        res.json(trabajadores);
    }catch(err){
        res.status(500).json({error:"Algo salió mal al solicitar a los trabajadores de la base de datos",err})
    }
};

export const getOneTrabajador = async (req,res)=> {
    try{
        const {rut} = req.params;
        const trabajador = await Trabajador.findAll({
            where:{
                rut:rut
            }
        });
        res.json(trabajador);
    }catch(err){
        res.status(500).json({error:"Algo salió mal al solicitar al trabajador de la base de datos",err})
    }
};

export const deleteOneTrabajador = async (req,res)=>{
    try{
        const {rut} = req.params;
        await Trabajador.destroy({
            where:{
                rut: rut
            }
        })
        res.json({menssage: "Trabajador eliminado de la base de datos"});

    }catch(err){
        res.status(500).json({error:"Algo salió mal al intentar eliminar al trabajador de la base de datos",err})
    }
};

export const updateTrabajador = async (req,res)=>{
    try{
        const {name,lastName,rut} =req.body;
        const {rutTrabajador} = req.params;
        await Trabajador.update({name,lastName,rut},{
            where:{
                rut:rutTrabajador
            }
        });
        res.json({message:"Datos del Trabajador actualizados"})

    }catch(err){
        res.status(500).json({error:"Algo salió mal al intentar actualizar los datos del trabajador",err})
    }
}

export const getAllTrabajadoresOfAJornada = async(req,res)=>{
    try{
        const { date } = req.params;

        const jornadaInfo = await Jornada.findAll({
            where:{
                date:date
            },
            order:[
                ['trabajadorId', 'ASC']
            ]
        });

        const trabajadoresFiltrados = jornadaInfo.map((trabajador)=>trabajador.trabajadorId);

        const trabajadoresInfo = await Trabajador.findAll({
            where:{
                id: {[Op.in]:trabajadoresFiltrados}
            },
            order:[
                ['id', 'ASC']
            ]
        })

        res.json({trabajadoresInfo,jornadaInfo});
    }catch(err){
        res.status(500).json({error:"Algo salió mal al intentar recuperar la información solicitada",err})
    }
};


export const getInformeMes = async(req,res)=>{
    try{
        const {dateStart, mes, dateFinish } = req.body;
        let nombreArchivo = "Informe_de_Asistencias";

        const ws = wb.addWorksheet("Informe de asistencia"+"_"+mes);

        ws.cell(1,1).string("Fecha").style(colEstilo);
        ws.cell(1,2).string("Hora Inicio").style(colEstilo);
        ws.cell(1,3).string("Hora Termino").style(colEstilo);
        ws.cell(1,4).string("Nombre").style(colEstilo);
        ws.cell(1,5).string("Apellido").style(colEstilo);
        ws.cell(1,6).string("Rut").style(colEstilo);

        const mesInfo = await Jornada.findAll({
            where:{
                date:{
                    [Op.between]:[dateStart,dateFinish]
                },
            },
            order:[
                ['trabajadorId', 'ASC']
            ],
            include: Trabajador
            
        });

        

        let cualFila = 2;
        mesInfo.forEach(datoActual => {
            ws.cell(cualFila,1).string(datoActual.date).style(contenidoEstilo);
            ws.cell(cualFila,2).string(datoActual.horaInicio).style(contenidoEstilo);
            ws.cell(cualFila,3).string(datoActual.horaTermino).style(contenidoEstilo);
            ws.cell(cualFila,4).string(datoActual.Trabajador.name).style(contenidoEstilo);
            ws.cell(cualFila,5).string(datoActual.Trabajador.lastName).style(contenidoEstilo);
            ws.cell(cualFila,6).string(datoActual.Trabajador.rut).style(contenidoEstilo);
            cualFila++
        });

        const pathExcel = path.join(__dirname,nombreArchivo + '.xlsx');

        wb.write(nombreArchivo+'.xlsx',res);

    }catch(err){
        res.status(500).json({error:"Algo salió mal al obtener la información",err})
    }
};

export const updateLicencia = async(req,res)=>{
    try{
        const {inicioLicencia, finLicencia} = req.body;
        const {rut} = req.params;

        await Trabajador.update({inicioLicencia, finLicencia},{
            where:{
                rut:rut
            }
        });

        res.json({message:"Inicio y termino de licencia médica actualizada"});

    }catch(err){
        res.status(500).json({error:"Algo salió mal al ingresar licencia",err})
    }
};


