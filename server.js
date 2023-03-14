import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import {sequelize} from './server/config/mysql.config.js';
import trabajadorRoutes from './server/routes/trabajador.routes.js'

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(__dirname + '/public' ));

app.use(cors({credentials:false, origin:'http://localhost:3000'}));

//aqui van las rutas
app.use(trabajadorRoutes);


async function main (){
    try{
        await sequelize.sync();
        console.log("Conexión con la base de datos exitosa");
        app.listen(3000, ()=>{
            console.log("Escuchando al puerto 3000");
        });
    }catch(err){
        console.log("Error al conectarse con la base de datos o el servidor", err)
    }
};

main();