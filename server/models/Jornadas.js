import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.config.js";


export const Jornada = sequelize.define('Jornada',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    date:{
        type:DataTypes.DATEONLY,
        validate:{
            notEmpty:true,
        }
    },
    horaInicio:{
        type:DataTypes.TIME,
        defaultValue:"00:00:00"
    },
    horaInicio:{
        type:DataTypes.TIME,
        defaultValue:"00:00:00"
    }
},{
    timestamps:false
});