import Sequelize  from "sequelize";

export const sequelize = new Sequelize(
    'Libro_asistencia_app',
    'root',
    'josemnaranjoc',
    {
        host:'localhost',
        dialect:'mysql'
    }
)